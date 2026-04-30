# `me://` URI Scheme — Grammar Specification
**neurons.me / suiGn**  
**v0.2**  
**License:** CC0 1.0 Universal — Public Domain

---

## 0. Scope
This specification defines the **canonical identity-addressing grammar** for the `me://` URI scheme.

It covers:
- namespace addressing
- surface selection
- canonical path addressing
- DNS/HTTP projection rules into canonical namespaces

It does **not** define:
- the full internal algebra of `.me`
- mutation syntax
- filters, ranges, or derived expressions
- transport protocol behavior beyond projection rules

The `path` defined here is **canonical-path only**.

---

## 1. Primitives

```abnf
me-uri          = "me://" namespace [ selector ] [ "/" canonical-path ]

namespace       = handle "." space
handle          = 1*( ALPHA / DIGIT / "-" )
                  ; handles are canonicalized lowercase
                  ; handles MUST NOT contain "." or "_"

space           = label "." label *( "." label )
label           = 1*( ALPHA / DIGIT / "-" )
                  ; labels are canonicalized lowercase

selector        = "[" selector-value "]"
selector-value  = ""
                / "current"
                / surface-ref
                / claim-ref

surface-ref     = surface-name
                / "surface:" surface-name

claim-ref       = "claim:" claim-token

surface-name    = 1*( ALPHA / DIGIT / "-" / "_" )
claim-token     = 1*( ALPHA / DIGIT / "-" / "_" )

canonical-path  = segment *( "." segment )
segment         = 1*( ALPHA / DIGIT / "-" / "_" )
```

---

## 2. Canonical Validity
A string is a **grammatically valid** `me://` URI if it matches the ABNF above.
A string is a **canonically valid** `me://` identity URI only if all of the following are true:

1. It is grammatically valid.
2. Its `namespace` is of the form `handle "." space`.
3. Its `handle` is a single structural label.
4. Its `space` is a **known space** in the resolver context.

A **known space** is a runtime-configured semantic root recognized by the resolver.

### Consequences
- `me://suign.neurons.me` is canonically valid if `neurons.me` is a known space.
- `me://user.community.neurons.me` is canonically valid if `community.neurons.me` is a known space.
- `me://neurons.me` is invalid.
  - A namespace requires a handle.
  - A root space is not, by itself, a canonical identity URI.

---

## 3. The `.` Operator
`.` is not a character. It is a structural operator with exactly one meaning:
> **descend into the next level**
This rule applies uniformly across the entire system:
| Context | Example | Meaning |
|---|---|---|
| Space | `neurons.me` | root space |
| Sub-space | `community.neurons.me` | refinement of space |
| Namespace | `suign.neurons.me` | handle inside space |
| Path | `profile.name` | descent into tree |
| Deep path | `wallet.primary.balance` | chained descent |
Because `.` has exactly one meaning, the parser is deterministic.
No regex heuristics. No character-overloading. No edge-case reinterpretation.
**Handles must not contain `.`**. This is not merely validation. It is a semantic invariant.  
If `.` were allowed inside handles, the grammar would become interpretive instead of structural.

---

## 4. Selectors
Selectors identify **where** a namespace is being resolved, never **what** the namespace is.
| Selector | Meaning |
|---|---|
| `[]` | explicit fanout across surfaces |
| `[current]` | current/local surface only |
| `[surface:iphone]` | explicitly named surface |
| `[iphone]` | shorthand for `[surface:iphone]` |
| `[claim:xyz123]` | pairing / claim handshake selector |
Selectors do not change namespace identity. They only constrain runtime targeting.

Example:

```txt
me://suign.neurons.me[macbook]/profile.name
```

- namespace = `suign.neurons.me`
- surface selector = `macbook`
- canonical path = `profile.name`

---

## 5. Identity vs Transport
Identity and transport are not the same thing, even when they share the same string.

| Scheme | Domain | Parsed as |
|---|---|---|
| `me://` | semantic parsing | namespace grammar |
| `https://` | transport parsing | DNS / HTTP host |

**Rule:** `me://` defines meaning. `https://` only reaches it.

```txt
me://suign.neurons.me[macbook]/profile.name
     ─────────────────────────
     semantic identity namespace
     parsed by me:// grammar

https://suign.neurons.me/profile.name
        ─────────────────
        DNS host
        parsed by HTTP/DNS
        may project to me:// via resolver
        but is not me:// by itself
```

DNS never shapes identity directly.  
Only explicit resolver rules may project a DNS host into a canonical namespace.

---

## 6. Namespace vs Surface vs Host
These terms are distinct and must not be conflated.

| Term | Definition | Example |
|---|---|---|
| **space** | root semantic world | `neurons.me` |
| **namespace** | derived identity space | `suign.neurons.me` |
| **surface** | runtime execution context within a namespace | `[macbook]`, `[iphone]` |
| **host** | HTTP/DNS transport address | `suign.neurons.me` as DNS |

A surface is not a namespace.
An iPhone, a MacBook, and a server process are all surfaces of the same namespace, not separate namespaces.

---

## 7. DNS → Namespace Projection
This section defines canonical projection behavior for `https://` and host-based ingress.

### 7.1 Projection Inputs
Given a DNS host `H`, the resolver also has a configured set of **known spaces**.

Example known spaces:

```txt
neurons.me
community.neurons.me
```

### 7.2 Projection Algorithm
To canonically project a DNS host into a namespace:
1. Find the **longest known-space suffix** of the host.
2. If no known-space suffix exists, canonical projection fails.
3. Count the labels that appear before that matched known space.
4. Apply the following rules:
   - `0` labels before suffix:
     - the host denotes a space ingress only
     - it does not denote a user namespace
   - `1` label before suffix:
     - canonical namespace projection succeeds
   - `2+` labels before suffix:
     - canonical projection fails

### 7.3 Examples
Assume known spaces = `{ neurons.me }`

| Input | Result |
|---|---|
| `https://neurons.me` | space ingress only |
| `https://suign.neurons.me` | projects to `suign.neurons.me` |
| `https://foo.bar.neurons.me` | canonical projection fails |

Assume known spaces = `{ neurons.me, community.neurons.me }`

| Input | Result |
|---|---|
| `https://community.neurons.me` | space ingress only |
| `https://user.community.neurons.me` | projects to `user.community.neurons.me` |
| `https://foo.bar.community.neurons.me` | canonical projection fails |

### 7.4 Canonical Rule
**Exactly one label before the longest matched known space** is the only valid user projection rule.
Anything else is not canonical.
A resolver implementation may attempt additional interpretation outside the canonical layer, but such behavior is **out of scope** for this specification.

---

## 8. Human Layer vs System Layer
The system supports multiple surface forms for the same identity.

```txt
Human layer:    suign@neurons.me
Semantic layer: me://suign.neurons.me
Web surface:    https://suign.neurons.me
```

### Canonical relation
```txt
suign@neurons.me  ->  suign.neurons.me  ->  me://suign.neurons.me
```

This is a canonicalization step, not a grammar rule.

### Operator distinction
- `@` = human-friendly binding operator
- `.` = system-level structural operator
Both coexist. Neither overrides the other.

---

## 9. Canonical Examples
```txt
me://suign.neurons.me/profile.name
me://suign.neurons.me[macbook]/wallet.primary.balance
me://suign.neurons.me[surface:iphone]/runtime.battery
me://suign.neurons.me[current]/session.active
me://suign.neurons.me[]/chat.general
me://suign.neurons.me[claim:xyz123]/new-surface
me://user.community.neurons.me/profile.name
```

The final example is canonically valid only if `community.neurons.me` is a known space.

---

## 10. Invalid Forms

```txt
me://neurons.me
; INVALID — namespace requires handle + space

me://suign@neurons.me
; INVALID — @ belongs to the human layer, not me:// grammar

me://localhost/profile
; INVALID — localhost is transport, not canonical namespace identity

me://sui_gn.neurons.me
; INVALID — "_" is not allowed in handles

me://john.dev.neurons.me
; INVALID unless dev.neurons.me is a known space

https://foo.bar.neurons.me
; INVALID for canonical user projection when longest matched known space is neurons.me
; two labels remain before the known space
```

---

## 11. Canonical Path Scope
The `canonical-path` in this specification is a **minimal addressing path** only.

Examples:

```txt
profile.name
wallet.primary.balance
runtime.battery
session.active
```

This specification does **not** define the full `.me` semantic algebra.
Out of scope:
- computed expressions
- mutation operators
- filters
- ranges
- query syntax
- internal runtime DSL

Those belong to a higher application/runtime layer.

---

## 12. The Invariant
> A symbol must fulfill its meaning by definition.
`.` means descent. Always. At every level. In every context.
This consistency is not achieved by validation heuristics after parsing.  
It is achieved by the grammar itself.
A system where symbols cannot lie does not need to be “made consistent.”  
Its consistency is structural.

---

**∴ suiGn / neurons.me — v0.2**