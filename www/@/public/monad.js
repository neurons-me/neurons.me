class MonadAI extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    /* ---------- Styling ---------- */
    const style = document.createElement('style');
    style.textContent = `
/* ---------- Monad floating “medusa / lava‑lamp” style ---------- */
@keyframes float {
  0%,100% { transform: translateY(0) scale(1); border-radius: 50%; }
  25%     { transform: translateY(-6px) scale(1.05); border-radius: 55% 45% 60% 40% / 60% 55% 45% 40%; }
  50%     { transform: translateY(-8px) scale(1.1); border-radius: 50% 60% 40% 55% / 55% 40% 60% 45%; }
  75%     { transform: translateY(-6px) scale(1.05); border-radius: 45% 55% 40% 60% / 40% 60% 55% 50%; }
}

@keyframes glow {
  0%,100% { opacity: 0.7; box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(173, 216, 230, 0.4); }
  50%     { opacity: 1; box-shadow: 0 0 30px rgba(255, 255, 255, 0.9), 0 0 60px rgba(173, 216, 230, 0.7); }
}

@keyframes blobMove {
  0%, 100% {
    top: 15%;
    left: 20%;
    width: 65%;
    height: 65%;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
    filter: blur(14px);
  }
  33% {
    top: 10%;
    left: 25%;
    width: 70%;
    height: 70%;
    border-radius: 55% 60% 40% 45% / 45% 50% 60% 55%;
    filter: blur(18px);
  }
  66% {
    top: 18%;
    left: 15%;
    width: 60%;
    height: 60%;
    border-radius: 50% 55% 45% 60% / 60% 50% 55% 40%;
    filter: blur(12px);
  }
}

.monad-container{
  position:fixed;
  bottom:20px;
  right:20px;
  z-index:2147483647;     /* keep it on top of everything */
}

.neurons-link{
  width:60px;
  height:60px;
  border-radius:50%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5), 0 0 50px rgba(173, 216, 230, 0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#e0f7ff;
  cursor:pointer;
  user-select:none;
  animation: float 6s ease-in-out infinite, glow 4.5s ease-in-out infinite;
  position:relative;
  transition: transform .3s ease;
  backdrop-filter: blur(10px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* inner “lava” blob */
.neurons-link::before{
  content:'';
  position:absolute;
  top:15%;
  left:20%;
  width:65%;
  height:65%;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(173,216,230,0) 80%);
  filter: blur(14px);
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  animation: blobMove 8s ease-in-out infinite;
  pointer-events:none;
  mix-blend-mode: screen;
}

/* hovering grows & brightens */
.neurons-link:hover{
  transform:scale(1.12);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 0 0 75px rgba(173, 216, 230, 0.5);
}

.readme-modal{
  display:none;
  position:fixed;
  bottom:90px;
  right:20px;
  width:320px;
  max-width:90vw;
  background:#222;
  color:#eee;
  border-radius:8px;
  box-shadow:0 4px 12px rgba(0,0,0,.4);
  padding:16px;
  font-family:sans-serif;
  z-index:2147483646;
}
.close-readme{
  position:absolute;
  top:6px;
  right:10px;
  cursor:pointer;
  font-size:18px;
}
input[type="text"]{
  background:#333;
  border:1px solid #555;
  color:#eee;
  padding:6px;
  border-radius:4px;
  width:100%;
}
button{
  margin-top:8px;
  padding:6px 10px;
  border:none;
  border-radius:4px;
  cursor:pointer;
  background:#555;
  color:#eee;
}
a{color:#8af;}
    `;

    /* ---------- HTML ---------- */
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.bottom = '20px';
    wrapper.style.right = '20px';
    wrapper.style.zIndex = '9999';
    wrapper.id = "wrapper";
    wrapper.classList.add('monad-container');
    wrapper.innerHTML = `
      <a class="neurons-link" id="openBtn">⊙</a>

      <div class="readme-modal" id="readmeModal">
        <span class="close-readme" id="closeBtn">×</span>
        <h2>⊙ .me Status</h2>
        <p id="monad-status">Verificando conexión...</p>

        <div id="monad-info" style="display:none;">
          <p><strong>Estado:</strong> <span id="status-text"></span></p>
          <p><strong>Puerto:</strong> <span id="monad-port"></span></p>
          <p><strong>Usuario:</strong> <span id="monad-user"></span></p>
          <p><strong>GraphQL:</strong> <a href="#" id="graphql-url" target="_blank">Abrir</a></p>
          <p><strong>Apollo:</strong> <a href="#" id="apollo-url" target="_blank">Abrir</a></p>
        </div>

        <div id="monad-error" style="display:none;">
          <p>❌ No se detectó .me activo.</p>
          <button id="downloadBtn">🔽 Descargar</button>
        </div>

        <hr />
        <label><strong>Conectado a:</strong></label>
        <input type="text" id="endpoint-input" value="http://localhost:7777" />
        <button id="retryBtn">🔁 Reintentar conexión</button>
      </div>
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    /* ---------- References ---------- */
    const modal = shadow.getElementById('readmeModal');
    shadow.getElementById('openBtn').onclick = () => modal.style.display = 'block';
    shadow.getElementById('closeBtn').onclick = () => modal.style.display = 'none';
    shadow.getElementById('retryBtn').onclick = () => this.checkStatus();
    shadow.getElementById('downloadBtn').onclick = () => window.open('https://neurons.me/install-me','_blank');

    /* store elements for status updates */
    this.$ = {
      endpointInput: shadow.getElementById('endpoint-input'),
      monadStatus:   shadow.getElementById('monad-status'),
      monadInfo:     shadow.getElementById('monad-info'),
      monadError:    shadow.getElementById('monad-error'),
      statusText:    shadow.getElementById('status-text'),
      monadPort:     shadow.getElementById('monad-port'),
      monadUser:     shadow.getElementById('monad-user'),
      graphqlUrl:    shadow.getElementById('graphql-url'),
      apolloUrl:     shadow.getElementById('apollo-url'),
      downloadBtn:   shadow.getElementById('downloadBtn'),
    };

    const dragTarget = shadow.getElementById('openBtn');
    let isDragging = false, offsetX = 0, offsetY = 0;

    dragTarget.onmousedown = (e) => {
      isDragging = true;
      offsetX = e.clientX - wrapper.offsetLeft;
      offsetY = e.clientY - wrapper.offsetTop;
      document.onmousemove = (e) => {
        if (!isDragging) return;
        wrapper.style.left = `${e.clientX - offsetX}px`;
        wrapper.style.top = `${e.clientY - offsetY}px`;
        wrapper.style.right = 'auto';  // Cancel fixed right position
        wrapper.style.bottom = 'auto'; // Cancel fixed bottom position
        wrapper.style.position = 'fixed';
      };
      document.onmouseup = () => {
        isDragging = false;
        document.onmousemove = null;
      };
    };
  }

  connectedCallback() {
    this.checkStatus();
  }

  async checkStatus() {
    const endpoint = this.$.endpointInput.value.replace(/\/$/, '');
    try {
      const res = await fetch(endpoint + '/status', { cache: 'no-store' });
      const data = await res.json();
      this.$.monadStatus.textContent = '✅ .me activo.';
      this.$.monadInfo.style.display = 'block';
      this.$.monadError.style.display = 'none';
      this.$.statusText.textContent = data.status || 'Activo';
      this.$.monadPort.textContent = data.port || '7777';
      this.$.monadUser.textContent = data.username || 'desconocido';
      this.$.graphqlUrl.href = endpoint + '/graphql';
      this.$.apolloUrl.href  = endpoint + '/playground';
    } catch (err) {
      this.$.monadStatus.textContent = '❌ No se detectó .me en tu dispositivo.';
      this.$.downloadBtn.textContent = '🔽 Install .me';
      this.$.monadInfo.style.display = 'none';
      this.$.monadError.style.display = 'block';
    }
  }
}

customElements.define('monad-ai', MonadAI);