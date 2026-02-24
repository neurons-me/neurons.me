import { useEffect, useRef } from 'react';
import { FiCalendar,  FiMessageCircle,  FiDatabase, FiZap, FiActivity, FiTarget, FiSearch, FiMap, FiServer, FiUsers } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';
import { GUI } from "all.this";
const {TextTitle } = GUI;
import { Link as RouterLink } from 'react-router-dom';
import * as THREE from 'three';
import AIIntegrationsGrid from '../../../components/BusinessHub/AIIntegrationsGrid';
function NeuronsCradle3D() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    // ---- Renderer / Scene / Camera (perspective para profundidad) ----
    const sizes = { w: mount.clientWidth || 420, h: mount.clientHeight || 300 };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, sizes.w / sizes.h, 0.1, 50);
    camera.position.set(0, 1.05, 3.5);
    camera.lookAt(0, 0.80, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(sizes.w, sizes.h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    mount.appendChild(renderer.domElement);
    // ---- Luces y “ambiente” para metal pulido ----
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const key = new THREE.PointLight(0xffffff, 1.5, 0, 2);
    key.position.set(2.2, 3, 2.2);
    scene.add(key);
    const fill = new THREE.PointLight(0xffffff, 1.35, 0, 2);
    fill.position.set(-2.2, 2.6, -2.2);
    fill.intensity = 1.35;
    scene.add(fill);
    const hemi = new THREE.HemisphereLight(0xffffff, 0x222831, 0.7);
    scene.add(hemi);
    const front = new THREE.DirectionalLight(0xffffff, 0.6);
    front.position.set(0, 0.8, 1.2);
    scene.add(front);
    // Subtle cyan rim light (neurons.me vibe)
    const rim = new THREE.DirectionalLight(0x9ff5ea, 0.25);
    rim.position.set(-1.2, 0.9, -1.0);
    scene.add(rim);

    // Env map simple (gradiente) para reflejos
    const envCnv = document.createElement('canvas');
    envCnv.width = envCnv.height = 128;
    const eg = envCnv.getContext('2d');
    const grad = eg.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#f5f7ff');   // brighter sky
    grad.addColorStop(1, '#4b5563');   // mid gray, not near-black
    eg.fillStyle = grad; eg.fillRect(0, 0, 128, 128);
    const envTex = new THREE.CanvasTexture(envCnv);
    envTex.colorSpace = THREE.SRGBColorSpace;
    envTex.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTex;

    // --- Pixel-art hammered metal textures (albedo + roughness + bump) ---
    function makePixelMetalTextures() {
      const S = 64; // small to keep pixels chunky
      const cell = 8; // pixel block size

      // Base color texture (albedo)
      const albedo = document.createElement('canvas');
      albedo.width = albedo.height = S;
      const ga = albedo.getContext('2d');
      for (let y = 0; y < S; y += cell) {
        for (let x = 0; x < S; x += cell) {
          // Slight variations around a silver tone (más claro)
          const v = 210 + Math.floor(Math.random() * 25); // 210–234 (más claro)
          ga.fillStyle = `rgb(${v},${v},${v})`;
          ga.fillRect(x, y, cell, cell);
        }
      }

      // Roughness map (darker = smoother, lighter = rougher)
      const rough = document.createElement('canvas');
      rough.width = rough.height = S;
      const gr = rough.getContext('2d');
      for (let y = 0; y < S; y += cell) {
        for (let x = 0; x < S; x += cell) {
          const v = 120 + Math.floor(Math.random() * 100); // 120–219
          gr.fillStyle = `rgb(${v},${v},${v})`;
          gr.fillRect(x, y, cell, cell);
        }
      }

      // Bump map (height map)
      const bump = document.createElement('canvas');
      bump.width = bump.height = S;
      const gb = bump.getContext('2d');
      for (let y = 0; y < S; y += cell) {
        for (let x = 0; x < S; x += cell) {
          const v = 140 + Math.floor(Math.random() * 70); // 140–209
          gb.fillStyle = `rgb(${v},${v},${v})`;
          gb.fillRect(x, y, cell, cell);
        }
      }

      const map = new THREE.CanvasTexture(albedo);
      map.colorSpace = THREE.SRGBColorSpace;
      const roughnessMap = new THREE.CanvasTexture(rough);
      const bumpMap = new THREE.CanvasTexture(bump);
      [map, roughnessMap, bumpMap].forEach(t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(2, 2); // tile to feel dense/heavy
        t.magFilter = THREE.NearestFilter; // preserve hard pixels
        t.minFilter = THREE.NearestFilter;
        t.anisotropy = 1;
        t.needsUpdate = true;
      });
      return { map, roughnessMap, bumpMap };
    }

    function createPixelMetalMaterial() {
      const { /*map,*/ bumpMap } = makePixelMetalTextures();
      return new THREE.MeshPhysicalMaterial({
        color: 0xE5E7EB,       // very light silver
        metalness: 1.0,
        roughness: 0.06,
        // map,                // omit albedo map to avoid dimming the metal
        bumpMap,
        bumpScale: 0.03,
        envMap: envTex,
        envMapIntensity: 2.0,
        clearcoat: 0.85,
        clearcoatRoughness: 0.08,
      });
    }

    // ---- Materiales ----
    const stringMat = new THREE.LineBasicMaterial({ color: 0x9aa0a6, linewidth: 1 });
    // ---- Parámetros del péndulo ----
    const COUNT = 5;
    const RADIUS = 0.25;         // bolas grandes
    const LENGTH = 1.4;          // cuerdas largas
    const SPACING = 2 * RADIUS;  // pivotes a 2R => bolas en reposo apenas se tocan
    const PIVOT_Y = 1.35;
    // ---- Estado ----
    const pivots = [];
    const balls = [];
    const strings = [];
    const angles = new Array(COUNT).fill(0); // rad
    const omegas = new Array(COUNT).fill(0); // rad/s
    const alphas = new Array(COUNT).fill(0); // rad/s^2

    // Física
    const g = 9.81;
    const damping = 0.997;   // ligera amortiguación
    const dt = 1 / 60;       // paso fijo

    // ---- Construcción ----
    const ballGeo = new THREE.SphereGeometry(RADIUS, 48, 32);
    for (let i = 0; i < COUNT; i++) {
      const px = (i - (COUNT - 1) / 2) * SPACING;
      const py = PIVOT_Y;
      const pz = 0;
      const pivot = new THREE.Vector3(px, py, pz);
      pivots.push(pivot);

      // cuerda
      const sGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(px, py, pz),
        new THREE.Vector3(px, py - LENGTH, pz),
      ]);
      const sLine = new THREE.Line(sGeo, stringMat);
      scene.add(sLine);
      strings.push(sLine);

      // bola
      const ball = new THREE.Mesh(ballGeo, createPixelMetalMaterial());
      ball.position.set(px, py - LENGTH, pz);
      scene.add(ball);
      balls.push(ball);
    }

    // Kick inicial (25°)
    angles[0] = -THREE.MathUtils.degToRad(25);

    // ---- Helpers ----
    function setPendulum(i, a) {
      const p = pivots[i];
      const bx = p.x + LENGTH * Math.sin(a);
      const by = p.y - LENGTH * Math.cos(a);
      balls[i].position.set(bx, by, p.z);
      const pos = strings[i].geometry.getAttribute('position');
      pos.array[0] = p.x; pos.array[1] = p.y; pos.array[2] = p.z;
      pos.array[3] = bx;  pos.array[4] = by;  pos.array[5] = p.z;
      pos.needsUpdate = true;
    }
    const EPS = 1e-6;
    const xOf = i => pivots[i].x + LENGTH * Math.sin(angles[i]);
    const yOf = i => pivots[i].y - LENGTH * Math.cos(angles[i]);
    const vxOf = i => LENGTH * Math.cos(angles[i]) * omegas[i];
    function setOmegaFromVx(i, vx) {
      const denom = LENGTH * Math.max(Math.abs(Math.cos(angles[i])), EPS);
      omegas[i] = vx / denom;
    }

    // ---- Interacción (drag para posicionar; al soltar se calcula ω) ----
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let dragging = null;
    let lastAngle = 0;
    let lastTime = performance.now();

    function ndcFromEvent(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      return { x, y };
    }
    function pickBall(x, y) {
      pointer.set(x, y); raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(balls, true);
      return hits.length ? balls.indexOf(hits[0].object) : null;
    }
    function worldOnZ0(x, y) {
      const v = new THREE.Vector3(x, y, 0.5).unproject(camera);
      const dir = v.sub(camera.position).normalize();
      const t = -camera.position.z / dir.z;
      return camera.position.clone().add(dir.multiplyScalar(t));
    }

    function onDown(ev) {
      ev.preventDefault();
      const src = ev.touches ? ev.touches[0] : ev;
      const { x, y } = ndcFromEvent(src);
      const hit = pickBall(x, y);
      if (hit !== null) {
        dragging = hit;
        lastTime = performance.now();
        lastAngle = angles[hit];
        renderer.domElement.style.cursor = 'grabbing';
      }
    }
    function onMove(ev) {
      if (dragging === null) return;
      const src = ev.touches ? ev.touches[0] : ev;
      const { x, y } = ndcFromEvent(src);
      const w = worldOnZ0(x, y);
      const p = pivots[dragging];
      const dx = w.x - p.x; const dy = w.y - p.y;
      const a = Math.atan2(dx, -dy);
      const MAX = THREE.MathUtils.degToRad(60);
      angles[dragging] = THREE.MathUtils.clamp(a, -MAX, MAX);
      omegas[dragging] = 0; // mientras arrastras, sin velocidad
    }
    function onUp() {
      if (dragging === null) return;
      const now = performance.now();
      const dtMs = Math.max(16, now - lastTime);
      const idx = dragging;
      const delta = angles[idx] - lastAngle;
      const omega = delta / (dtMs / 1000);
      const MAX_RELEASE = THREE.MathUtils.degToRad(360);
      omegas[idx] = THREE.MathUtils.clamp(omega, -MAX_RELEASE, MAX_RELEASE);
      dragging = null;
      renderer.domElement.style.cursor = 'default';
    }

    renderer.domElement.addEventListener('mousedown', onDown);
    renderer.domElement.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    renderer.domElement.addEventListener('touchstart', onDown, { passive: false });
    renderer.domElement.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);

    // ---- Física ----
    function integrate() {
      for (let i = 0; i < COUNT; i++) {
        if (dragging === i) continue; // el que arrastras sigue al puntero
        alphas[i] = -(g / LENGTH) * Math.sin(angles[i]);
        omegas[i] += alphas[i] * dt;
        omegas[i] *= damping;
        angles[i] += omegas[i] * dt;
        const LIMIT = THREE.MathUtils.degToRad(85);
        if (angles[i] > LIMIT) { angles[i] = LIMIT; omegas[i] *= -0.2; }
        if (angles[i] < -LIMIT) { angles[i] = -LIMIT; omegas[i] *= -0.2; }
      }
    }

    function collide() {
      for (let i = 0; i < COUNT - 1; i++) {
        const j = i + 1;
        const xi = xOf(i), xj = xOf(j);
        const yi = yOf(i), yj = yOf(j);
        const dx = xj - xi; const dy = yj - yi;
        const dist = Math.hypot(dx, dy);
        const touch = 2 * RADIUS;
        if (dist <= touch + 1e-4) {
          const vxi = vxOf(i);
          const vxj = vxOf(j);
          // ¿se aproximan a lo largo de x?
          if ((vxi - vxj) * (dx >= 0 ? 1 : -1) > 0) {
            const newVxi = vxj;
            const newVxj = vxi;
            setOmegaFromVx(i, newVxi);
            setOmegaFromVx(j, newVxj);
          }
          // corrección posicional para no interpenetrar
          const penetration = touch - dist;
          if (penetration > 0) {
            const corr = (penetration / 2) * (dx >= 0 ? 1 : -1);
            const di = LENGTH * Math.max(Math.abs(Math.cos(angles[i])), 1e-4);
            const dj = LENGTH * Math.max(Math.abs(Math.cos(angles[j])), 1e-4);
            angles[i] -= corr / di;
            angles[j] += corr / dj;
          }
        }
      }
    }

    function updateVisuals() {
      for (let i = 0; i < COUNT; i++) setPendulum(i, angles[i]);
    }

    // ---- Main loop (fixed timestep) ----
    let acc = 0; let last = performance.now();
    function loop() {
      const now = performance.now();
      acc += (now - last) / 1000; last = now;
      const MAX_STEPS = 5;
      let steps = 0;
      while (acc >= dt && steps < MAX_STEPS) {
        integrate();
        collide();
        acc -= dt; steps++;
      }
      updateVisuals();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }

    for (let i = 0; i < COUNT; i++) setPendulum(i, angles[i]);
    loop();

    function onResize() {
      const w = mount.clientWidth || sizes.w;
      const h = mount.clientHeight || sizes.h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('mousedown', onDown);
      renderer.domElement.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      renderer.domElement.removeEventListener('touchstart', onDown);
      renderer.domElement.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      renderer.dispose();
      scene.traverse(obj => {
        if (obj.isMesh) { obj.geometry.dispose(); if (obj.material.map) obj.material.map.dispose(); obj.material.dispose(); }
        if (obj.isLine) { obj.geometry.dispose(); }
      });
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: 'clamp(320px, 38vh, 520px)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-3.52rem' }} />
  );
}

const DataDriven = () => {
  return (
    <div style={{ padding: '1rem', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Hero animation */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 1rem 0', width: '100%' }}>
        <NeuronsCradle3D />
      </div>
<p></p>
          <TextTitle
            title="Data‑Driven Business:"
            h="3"
            subtitle= "Efficiency & Risk Mitigation"
            />
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'left' }}>
        <section>
          <p>
             When decisions are grounded in trustworthy data, teams move faster, waste less, and avoid costly mistakes. At <strong>neurons.me</strong>, we
            help you turn scattered information into a reliable system that compounds efficiency and reduces risk.
          </p>
        </section>

        <section>
          <h2>Where Efficiency Comes From</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiDatabase style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
              <span><strong>Single source of truth:</strong> one place to find answers, no duplicate spreadsheets.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiZap style={{ marginTop: 2, color: '#7aa5ff' }} />
              <span><strong>Automated collection & cleanup:</strong> fewer manual updates, fewer delays.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
              <FiActivity style={{ marginTop: 2, color: '#ffd166' }} />
              <span><strong>Operational visibility:</strong> live dashboards to spot bottlenecks and fix them early.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <FiTarget style={{ marginTop: 2, color: '#e5396f' }} />
              <span><strong>Better resource allocation:</strong> spend time and budget where impact is measurable.</span>
            </li>
          </ul>
        </section>


        <section>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              gap: '1rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Columna izquierda */}
            <Box sx={{
              width: { xs: '100%', lg: '50%' },
              flex: { lg: '0 0 50%', xs: '1 1 100%' },
              minWidth: 0,
              order: { xs: 2, lg: 1 },
              // When stacked (xs–md), keep grid from growing too wide and center it
              maxWidth: { xs: 560, sm: 640, lg: 'none' },
              mx: { xs: 'auto', lg: 0 }
            }}>
              <p></p>
              <Typography variant="h6">More AI Integrations:</Typography>
              <p>  </p>
              <p> </p>
              <AIIntegrationsGrid />
            </Box>

            {/* Columna derecha */}
            <Box sx={{
              width: { xs: '100%', lg: '50%' },
              flex: { lg: '0 0 50%', xs: '1 1 100%' },
              minWidth: 0,
              marginLeft: 3,
              textAlign: 'left',
              order: { xs: 1, lg: 2 }
            }}>
              <h2>How We Help</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiSearch style={{ marginTop: 2, color: 'rgb(0, 170, 150)' }} />
                  <span><strong>Audit:</strong> inventory sources, flows, owners, and risks.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiMap style={{ marginTop: 2, color: '#7aa5ff' }} />
                  <span><strong>Blueprint:</strong> model, governance, and metrics that matter.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <FiServer style={{ marginTop: 2, color: '#ffd166' }} />
                  <span><strong>Build:</strong> pipelines, storage, and dashboards that scale.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <FiUsers style={{ marginTop: 2, color: '#e5396f' }} />
                  <span><strong>Enable:</strong> training + handoff so your team owns the system.</span>
                </li>
              </ul>
            </Box>
          </Box>
        </section>

        <section>
            <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '10px'
            }}
          >
          <h2>Let’s Talk</h2>
            <RouterLink
              to="/ai-integration-call"
              aria-label="Book Appointment"
              title="Book Appointment"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 42,
                marginTop: '16px',
                height: 42,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <FiCalendar size={18} />
            </RouterLink>

            <RouterLink
              to="https://wa.me/527291671525?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20AI%20solutions"
              aria-label="Chat With Us"
              title="Chat With Us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 42,
                marginTop: '16px',
                height: 42,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <FiMessageCircle size={18} />
            </RouterLink>
          </div>
          <p>
            We’ll assess your current state and design a pragmatic roadmap to become truly data‑driven—
            improving efficiency while actively mitigating operational and compliance risks.
          </p>
        </section>
      </div>
    </div>
  );
};


export default DataDriven;