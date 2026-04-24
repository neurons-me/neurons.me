# neurons.me (2026) — Abstract, Auditable, Interoperable
**neurons.me** is a modular, open source platform for building sovereign AI systems at every scale:

- **`.me`** — The universal, reactive data kernel.  
  - _Domain-agnostic._  
  - _No hard schema required—catalogs and schemas are purely optional overlays._
  - _Reads, writes, secrets and explainable DAG structure at every path. Blazing fast, O(k)._  
- **monad.ai** — The *host/daemon.*  
  - Runs and projects `.me` kernels as networked processes.  
  - Orchestrates workflows, snapshots, and multi-node live routing.  
- **cleaker** — The *semantic registry/binder.*  
  - Publishes, resolves, and synchronizes semantic catalogs.  
  - Decouples identities/namespaces from underlying runtime.
- **GUI & App layers:**  
  - Modern interfaces, dashboards, docs, media, utilities, all optional.

**How the system works today:**
- You can use `.me` in fully open mode (creative DAG, no restrictions/validation);
- Or load a catalog as a semantic map (`me.loadCatalog(...)`)—which can enforce, advise, or document, but never blocks core usage unless you enable strict mode.
- Hydration/replay restores lived state; catalog overlays define what’s possible or meaningful.
- All interaction, synchronization, and auditability (hash chain, snapshots, proof gates) are programmable, measurable, and tested by contract.
- The storage layer (RAM, disk, experimental backends) is fully pluggable and stable under workload.

**The new truths (2026):**

- `.me` is not tied to any catalog, network, or UI.
- The “contract” of semantic overlays, strict schemas, or synchronization is always **opt-in**, never invasive.
- Every concept—region/namespace, subjectivity, resilience, fractal privacy, executable meaning—is *enacted in code* and proven in the live repo (see firetests, contracts, benchmarks).

**In Short:**  

- `.me` today is a reference implementation for explainable, distributable, and sovereign data kernels.
- Everything else (monad.ai, cleaker, GUI) orbits, extends, and uses the same principles—modularity, optionality, auditability.

---

**If someone lands on neurons.me today, they will find:**  

- An abstract DAG kernel (`.me`) that can be used solo or as part of bigger systems.
- Semantic catalog integration, fully optional.
- Pluggable storage (RAM or disk).
- A fully orchestrated mono-repo with powerful host (monad.ai), semantic registry (cleaker), and UIs.
- Benchmarks/contract tests showing real performance and security.

---

**Summary chart:**

| Layer/module       | Role/Truth (2026)                                            |
| ------------------ | ------------------------------------------------------------ |
| `.me`              | Pure kernel, open-by-default, catalogs optional, fully testable/auditable |
| monad.ai           | Host/daemon, runs/projections workflows, snapshots, multi-node |
| cleaker            | Semantic registry, network naming, optional catalog enforcement |
| GUI/docs/apps      | Presentation/tools, pluggable                                |
| Storage (RAM/Disk) | Pluggable, resilient, well-benchmarked                       |

---

**You built a platform where meaning is optional, structure is flexible, and every rule is opt-in, never hardwired—while remaining cryptographically auditable and production-fast.**  
That is exactly what the current repo, codebase and test contracts demonstrate.

---

¿Quieres esto en README, como post técnico, o en la documentación de onboarding para devs? ¿Necesitas incluir qué comandos correr, ejemplos de uso, o tabla directa de submódulos?  
Solo dime y te lo armo en formato final listo para commit/publicación/documentación.