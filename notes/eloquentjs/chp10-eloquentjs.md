# What are **modules** and how are they useful?

**Modules** are the division of programs into clusters of code that belong together. They're different from _interfaces_ in that they enable chunks of code to be reusable regardless of context, whereas _interfaces_ are less code-centered and represent the contract by which the program adheres to. **Modules** help make a program easier to maintain, editable, trackable and shareable.

## What is **namespace pollution** and how can you create _subnamespaces_?

Because of how _scopes_ work in **JavaScript**, **namespace pollution** is the problem of unrelated code sharing a single set of global variables. **Modules** come into play to create _subnamespaces_, avert **namespace pollution** often by building **namespace-isolating modules** using **objects** and _functions_.

### What is `npm`?

`npm` is a public package manager for **JavaScript** enabling users to download and upgrade **modules** off of a database for reusing in programs.

#### What is _decoupling_?

_Decoupling_ harnesses an important aspect of **modules** in isolating pieces of code from each other. A well-written **module** provides a reusable _interface_ for external code, and as the **module** gets updated the _interface_ remains stable in that its functionality stays consistent.

##### How do you create a **private namespace** using a _function expression_?

A statement starting with the keyword `function` is a _function declaration_ that requires a name. To create a **private namespace** using a _function expression_, the statement is in parens and followed by `()` to call it as an _expression_. This allows you to detach from the **global scope** and use the **module**, but this could cause problems if **modules** claim the same name or if you want to load more than one version of the same **module** at the same time.

###### How can you use `require` to make sure **modules** don't conflict?

You can use a `require` _function_ to wrap the **module** code in a `new` _function_ instantiated within the `require` _function_. This approach localizes the namespace within the `new` _function_ and averts **namespace pollution**.

###### What are the two types of **module systems** in **JavaScript**?

The above implementation of the `require` _function_ poses a couple of problems, firstly it hampers performance as it loads and runs a **module** every time it's required, meaning if you call `require()` a lot of times or if more than one **module** have the same dependency, it will slow down performance. Moreover, it's not possible for a **module** to export a value other than the `exports` **object**. An example would be that it can't export the constructor of the **object** type it defines. You can work around this by providing the **module** with another `module` variable. `function require(name) { if (name in require.cache) { return require.cache[name]; } var code = new Function('exports, module', readFile(name)); var exports = {}, module = {exports: exports}; code(exports, module); require.cache[name] = module.exports; return module.exports; } require.cache = Object.create(null);` This **module system** is one of two, and it's called _CommonJS_. The other **module system** is **AMD** or **Asynchronous Module Definition**. The former runs synchronously while the latter runs asynchronously. This mean that _CommonJS_ loads **modules** first before going through the rest of the program, pausing all operations before the **module** finishes loading. While **AMD** loads the **modules** asynchronously, which means that it loads **modules** concurrently while the rest of the program runs, enabling higher performance and more efficient execution since the **modules** are loading in the background, then running them without pausing the program. **AMD** would look like this for the previous example: `define(['weekDay', 'today'], function(weekDay, today) { console.log(weekDay.name(today.dayNumber())); });` the `define` _function_ takes first an _array_ of **modules** that load and then once dependancies load, calls the _function_ with the _interfaces_ of those dependancies as arguments.
