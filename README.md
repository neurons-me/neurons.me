<p align="center">
  <a href="https://neurons.me/">
    <img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629064/neurons.me_b50f6a.png" alt="neurons.me" width="89" />
  </a>
</p>

# neurons.me

###### **Go Algorithmic.**

neurons.me is the sovereign identity and federated compute platform. It coordinates semantic resolution across devices, domains, and networks — always local-first, with trust materialized at the registry, never re-derived at runtime.

---

## What this repo contains

| Path | Contents |
|------|----------|
| `docs/` | Architecture and protocol documentation (EN + ES) |
| `domains/@.neurons.me/` | Main landing site — static HTML + media |
| `domains/_.neurons.me/` | Root domain server |
| `domains/docs.neurons.me/` | Public documentation site |
| `domains/media.neurons.me/` | Media domain |
| `domains/server.neurons.me/` | Server domain configuration |

---

## Ecosystem

The full stack lives in [all.this](https://github.com/neurons-me/all.this) — the monorepo.

| Module | Role |
|--------|------|
| `.me` (`this.me`) | Semantic kernel — O(k) reactive graph, 11 axioms |
| `cleaker` | Namespace binding — identity mounting, context lens |
| `monad.ai` | Durable ledger — surfaces, snapshots, federation |
| `netget` | Registry + proxy mesh, trust materialization |

`.me → cleaker → monad.ai → NetGet → neurons.me`

---

## Docs
- [Architecture spec](./docs/en/neurons.me.md)
- [Namespace Resolution Protocol](./docs/en/NRP.md)
- [me:// URI grammar](./docs/en/me-uri-grammar.md)
- [Arquitectura (ES)](./docs/es/Arquitectura.md)

---

**∴ suiGn**
