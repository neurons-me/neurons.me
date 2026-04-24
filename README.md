<p align="center">
  <a href="https://neuron.me/">
    <img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629064/neurons.me_b50f6a.png" alt="neurons.me" width="89" />
  </a>
</p>
# neurons.me

###### Go Algorithmic.
A modular ecosystem for **sovereign subjects, distributed memory, and explainable AI interfaces** built on graphs and derivatives.

---

## What is this repo?
This is the official monorepo for **neurons.me**, an open platform for **sovereign AI systems** where memory, auditability, and multi-node integration are core architectural principles.  
It includes the **cryptosemantic kernel `.me`,** the integrated **GUI**, `monad.ai` (the host/daemon node), `cleaker` (the grammar and network bridge), and satellite modules (video, pixel, wallet, etc).

---

## Monorepo Architecture
The repo is organized into independent but interoperable submodules:

| Folder/Path               | Module/Core  | Description                                                  |
| ------------------------- | ------------ | ------------------------------------------------------------ |
| `/this/.me/`              | **`.me`**    | Cryptosemantic kernel (sovereign, explainable memory; local or persistent) |
| `/core/monad.ai/`         | **monad.ai** | Daemon host: persists, projects, and syncs identities/claims/namespaces |
| `/core/cleaker/`          | **cleaker**  | Grammar, pointer, and binder between `.me` kernels and the network |
| `/all.this/` (satellites) | **all.this** | Modular data structures connectable to neurons.me and other projects |

> Each submodule can evolve and be built independently (e.g. you can use just `.me`, just the GUI, or run the whole stack locally).

**MIT License**
Copyright (c) 2025
[neurons.me](https://neurons.me)
