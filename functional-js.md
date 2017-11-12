# In **Underscore.js**, what do `_.chain`, `_.value` and `_.tap` do?

`_.chain` creates a wrapper of a value that returns it in a manner like the **jQuery** library does enabling method chaining of other **Underscore.js** methods. A `_.chain` is undone by `_.value`, which returns the value of the chained methods. `_.tap` intercepts a chain and helps mutate intermediate values in the middle of the chain.
