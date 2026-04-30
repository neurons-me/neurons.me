### Valid Examples (per spec)

All of these are canonically valid assuming the relevant known spaces:

`me://suign.neurons.me/profile.name`

`me://suign.neurons.me[macbook]/wallet.primary.balance`

`me://suign.neurons.me[surface:iphone]/runtime.battery`

`me://suign.neurons.me[current]/session.active`

`me://suign.neurons.me[]/chat.general`

`me://suign.neurons.me[claim:xyz123]/new-surface`

`me://user.community.neurons.me/profile.name (if community.neurons.me is known)`

### Invalid Forms (correctly rejected)

`me://neurons.me → missing handle`

`me://suign@neurons.me → @ not allowed in me://`

`me://sui_gn.neurons.me → _ forbidden in handle`

`me://john.dev.neurons.me → invalid unless dev.neurons.me is known`

`https://foo.bar.neurons.me → too many labels before known space`

### Canonical Projection Rule (recap + confirmation)

The resolver **always** uses the **longest matching known space** as the suffix.

| Input Host                | Known Spaces                     | Longest Match        | Labels Before | Result                           | Namespace                 |
| ------------------------- | -------------------------------- | -------------------- | ------------- | -------------------------------- | ------------------------- |
| john.dev.neurons.me       | neurons.me                       | neurons.me           | 2 (john.dev)  | **Invalid** (per canonical rule) | —                         |
| john.dev.neurons.me       | neurons.me, **dev.neurons.me**   | **dev.neurons.me**   | 1 (john)      | **Valid**                        | john.dev.neurons.me       |
| user.community.neurons.me | neurons.me, community.neurons.me | community.neurons.me | 1 (user)      | **Valid**                        | user.community.neurons.me |
| foo.bar.dev.neurons.me    | neurons.me, dev.neurons.me       | dev.neurons.me       | 2 (foo.bar)   | **Invalid**                      | —                         |

This is intentional and by design.

### Why this is the right behavior

- It keeps the grammar **structural and deterministic**.
- Sub-spaces (dev.neurons.me, community.neurons.me, etc.) can themselves be registered as first-class known spaces.
- A single label before that sub-space becomes the handle → clean hierarchy without breaking the "exactly one label before known space" invariant.
- It prevents ambiguous cases like john.dev.neurons.me being interpreted in two different ways depending on resolver state.

### Practical Example

If your resolver is configured with these known spaces:

text

```
neurons.me
dev.neurons.me
community.neurons.me
team.neurons.me
```

Then these are all canonically valid:

`me://suign.neurons.me`

`me://john.dev.neurons.me`

`me://alice.community.neurons.me`

`me://team42.team.neurons.me`

But these are still invalid:

`me://john.dev.neurons.me (if dev.neurons.me is **not** known)`

`me://foo.bar.dev.neurons.me (even if dev.neurons.me is known)`