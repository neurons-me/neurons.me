## Canonical Identity Invariants

This document defines the immutable rules that govern all identity in the **neurons.me / this.me** system.

### 1. Foundational Principle

> **One single canonical namespace per identity. Always.**

Everything else — human sugar, DNS hosts, HTTP addresses, surfaces, claims — is a projection or syntactic sugar that **must** resolve to the exact same canonical object.

### 2. Structural Invariants

| Rule                           | Description                                                  | Consequence                                                  |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Handle + Space required**    | Every canonical namespace is `handle.space`                  | `me://neurons.me` is invalid. A handle is mandatory.         |
| **Handle is atomic**           | Single segment only (`[A-Za-z0-9-]+`). No `.` or `_` allowed | `suign@neurons.me` ✓<br>`john.dev@neurons.me` ✗              |
| **`.` always means descend**   | It is a structural operator, never part of a name            | Applies uniformly to spaces, sub-spaces, paths, and canonical URIs |
| **Selector is orthogonal**     | `[surface]`, `[current]`, `[claim:xxx]` do not affect identity | They only control *where* something is resolved, never *what* it is |
| **Longest known-space suffix** | DNS projection always uses the longest matching known space  | Enables clean sub-spaces (`dev.neurons.me`, `community.neurons.me`, etc.) |

### 3. Equivalent Representations of the Same Identity

```ts
// Human layer (sugar)
"suign@neurons.me"

// Semantic layer (canonical)
me://suign.neurons.me

// Transport layer
https://suign.neurons.me
https://suign.neurons.me/profile.name

// Runtime
Me({ name: "suign", space: "neurons.me" })
```

All of the above must resolve to the **exact same** canonical namespace.

### 4. Canonical Functions (Single Source of Truth)

These functions must be used by every layer of the system:

- `parseCanonicalMeUri()` / `formatCanonicalMeUri()`
- `projectDnsHostToNamespace()`
- `canonicalizeLegacyAtOperator()`
- `resolveHostToMeUri()` (in monad.ai)

Any code that validates or normalizes identity **must** go through these functions.

### 5. Valid Examples

- `suign@neurons.me` → `me://suign.neurons.me`
- `alice@community.neurons.me` → `me://alice.community.neurons.me` (if `community.neurons.me` is a known space)
- `me://john.dev.neurons.me` (if `dev.neurons.me` is a known space)
- `me://suign.neurons.me[macbook]/wallet.primary.balance`

### 6. Invalid Examples

- `suign@foo.bar.neurons.me` (unless `bar.neurons.me` is a known space)
- `john.dev@neurons.me` (`.` inside handle)
- `sui_gn@neurons.me` (`_` inside handle)
- `me://neurons.me` (missing handle)

### 7. Golden Rule

> **If two representations do not produce the exact same canonical `me://` URI, they do not represent the same identity.**

This invariant is now enforceable across the entire stack thanks to the implemented functions.
