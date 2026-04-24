# neurons.me — System Truth, 2026 Update

## 1. ¿Qué sigue siendo verdad del sistema?  
**.me** sigue siendo el **núcleo reactivo, abstracto y universal**. No depende de ningún catálogo, modelo, ni semántica fija.  
- Su API sigue siendo: paths arbitrarios, escritura/lectura reactiva, secretos, explain, derivaciones.
- La arquitectura DAG y el proxy dual (`me.a.b.c` y `me("a.b.c")`) permanecen.
- **No hay acoplamiento a dominio/ontología**: ni wallets, ni profiles, ni social, ni AI—solo nodos, paths y valores reactivos.
- Los cambios recientes Fase 2.0/2.1/2.3 refuerzan su independencia (storage pluggable, heap acotado, batch rewrite optimized).

**+ Nuevo**:  
- Storage ya no es solo heap/RAM; soporta Disco (DiskStore), export/import, y múltiples backends pluggables.
- El explain(), la auditabilidad y la chain integrity (hash chain, prevHash, history replay) están reforzados y 100% probadas por contract.

---

## 2. ¿Y el ecosistema del mono-repo?

### Componentes Principales (Status real):

| Módulo/Path                  | Rol                    | Estado/Notas                                        |
| ---------------------------- | ---------------------- | --------------------------------------------------- |
| `/this/.me/`                 | **.me**                | Núcleo reactivo, cryptosemántico, sin dominio fijo. |
| `/core/monad.ai/`            | **monad.ai**           | Daemon host. Orquesta kernels .me. Proyecta namesp. |
| `/core/cleaker/`             | **cleaker**            | Registry semántico. Publica, resuelve, sincroniza   |
| `/domains/*neurons.me/`      | GUI/Apps               | Frontends, UIs, docs, experimentos y demos          |
| `/domains/docs.neurons.me/`  | Docs/Ejemplos          | Documentación y ejemplos vivos                      |
| `/domains/media.neurons.me/` | Media/Assets           | Imágenes, recursos para docs y GUI.                 |
| `/all.this/` y más satélites | Estructuras/Utilidades | Pixel, Wallet, Audio, etc.—pluggable                |

**Lo fundamental:**  
- `.me` sigue inyectable, portable y puede correr aislado o dentro de monad.ai/cleaker.
- Los *catálogos* y *esquemas* son opcionales y externos (vía cleaker/monad). `.me` no deja de ser flexible por esos artefactos.
- **Ahora puedes correr flujos reales:**  
  - Desde una UI o desde consola, puedes usar `.me` puro, o `.me` + catálogo, o `.me` + storage disco, o todo como nodo hospedable.

---

## 3. ¿Qué cambió respecto al manifiesto original?

### No cambió:
- La **autonomía** y plasticidad del kernel `.me`.
- Puedes tener modos completamente libres o restrictivos (catálogo).
- Hydrate y catalog siguen ortogonales, no acoplados.
- Todo sigue validado por tests/fases/contracts—**semántica, crypto, performance**.
- La filosofía: runtime ≠ ontología, auditabilidad absoluta (prevHash, explain, snapshots).

### Sí cambió o se profundizó:
- El *storage* dejó de ser un detalle técnico: ahora lo puedes plugguear, medir y auditar, y soporta casos reales de millones de nodos sin OOM.
- **Performance**: kernels y flujos rewrite-heavy ya son estables y ultra-rápidos.
- **Catálogo como modo**: ya existe soporte experimental (modo advisory/strict está esbozado y sigue en evolución contractual).
- **Integración**: cleaker es cada vez más “network registry”, no kernel; monad.ai es realmente un host/multiplexor; la GUI existe y puede usarse acoplada o separada.
- **El mono-repo es orquestador, no dictador**: Nada obliga a usar todo el stack—cualquier pieza puede vivir sola.
