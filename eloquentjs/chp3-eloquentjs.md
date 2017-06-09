# What is a **function**, how can you call it and define it?

A **function** is a way of wrapping a piece of _program_ in a **value**. It helps with structuring and streamlining _programs_. You can define a **function** in the same way as **variables**, by wrapping it in a **value** for a **variable**. You can call a **function** by writing it and declaring its **value**. A _result_ statement follows if a **function** produces more than a _side effect_, in other words is producing an output.

`var square = function(x) { return x * x; }; console.log(square(12));`

## What are **parameters** and _scopes_?

**Parameters** are like regular **variables**, they're a part of a **function's** _caller_ as opposed to its initial _body_. **Parameters** come after a **function's** definition in code. _Scopes_ can either be _local_ or **global**. If a defined **variable** exists within a **function's** _body_, then it stays local within the **function** and its **parameters**, as opposed to if a **variable** outside of a **function's** _body_, which in turn makes its _scope_ **global**.

### What's a _nested scope_?

A _nested scope_ is a _scope_ within another. A _local scope_ can identify all the _local scopes_ within it. The **variables** in blocks around a **function's** definition are within a **function's** _scope_, including the **variables** within the **function** as well as the **variables** at the top of the **program**. This is **_lexical scoping_**. Moreover, **functions** are the sole objects in **JavaScript** that create new _scopes_. Furthermore, **recursion** can be useful when dealing with problems that require plural branches, which can in turn have their own sub-branches.

### What's a **declaration notation** and where it placed in the _control flow_?

There's a shorthand **declaration notation** for **functions**, using the **function keyword** at the start of a **statement**. By declaring a **function** it's removed from the normal top-to-bottom _control flow_ and moves to the top of their _scope_ and is usable by all code in its _scope_. **Functions** **_cannot_** aren't declarable within a **conditional loop** or _block_. It produces uncertain and unpredictable effects, so this practice is best avoided.

### What is the **call stack**?

The **call stack** is the context from which a called **function** is. When you call a **function** after its definition, control jumps back to the definition and executes the **function's** _body_, and then goes back to the context of the called **function** (often after its definition) and then executes the rest of the _program_. Since after a **function's** execution, control jumps back to the context or where the called **function** was, the computer has to remember the context, this is the **call stack**. Every time a **function's** called, it's placed at the top of the **stack**. After a **function** returns, it removes the top context from the **stack** and proceeds with execution. Storing a **call stack** require and uses memory, if a **stack** is too big, the computer will fail because of _"too much recursion"_ or being _"out of stack space"_. This happens from having an infinite back-and-forth between two **functions**, or rather would be infinite given infinite **stack** space.

#### What's an **optional argument**?

A **function** can have more than one **argument**, but needs one to properly execute. There's no ceiling on the number of **optional arguments** a **function** can have, which can be a problem because you don't know the correct number of **optional arguments** for a **function**. The upside is that enables **functions** to have options for **arguments** when executing.

### What's _closure_ and **recursion**?

_Closure_ is the ability to reference an instance of _local_ **variables** within a **function**. The concept of _closure_ abolishes the stress of juggling **variables** and actually enables further creativity in using **function values**. A **function** that calls itself is a **recursive function**. **Recursion** allows for a different style of writing **functions** enabling **functions** to call themselves. The problem with **recursion** is that in **JavaScript**, it's much slower to execute than a _loop_ is. Though, it's a much more elegant way of programming. Furthermore, **recursion** can be useful when dealing with problems that require plural branches, which can in turn have their own sub-branches.

#### What are **function** _side effects_?

**Function** _side effects_ are a byproduct of some **functions**. _Pure_ **functions** have no _side effects_ and solely produce a **return value**. **Functions** that create **values** are more versatile than **functions** that create _side effects_. A highly important **function** such as _console.log_ would be almost impossible to define without _side effects_ for instance.
