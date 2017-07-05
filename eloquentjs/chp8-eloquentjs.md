# What are **bugs** and how can you fix them?

**Bugs** are an inevitable product of programs. They are either a result of programmers' mistakes or how the program interacts with other systems. You can fix **bugs** by finding them, which as expected is not so easy. The process of identifying **bugs** in a program is _debugging_.

## What is **strict mode**?

**Strict mode** is a **JavaScript** mode where it helps you identify some errors like variables that are not defined, or instead of assigning `this` to the global **object variable**, it assigns it to undefined in the case where `new` isn't used to invoke a **constructor**. You can apply **strict mode** by writing the statement `'use strict';` at the top of your program or _function scope_.

### What are **testing** and _debugging_?

**Testing** is the process of writing out different cases that check the rigidity of a program, with conditionals that return a value according to the test that failed. A collection of tests is often referred to as test suites, that provide a language in the form of _functions_ and **methods**, these are **testing frameworks**. _Debugging_ is the process of finding **bugs** in a program. You can use a browser's **debugger** to set up breakpoints in the program, where the browser pauses the program when it comes across a breakpoint in the code. Moreover, adding the `debugger;` statement anywhere in the code makes the browser pause the program when it comes across said statement.

#### How can you handle **exceptions** with `throw`, `try` and `catch` and `finally` keywords and what is their meaning?

Handling **exceptions** is when you stop the program in case of an **exception** when a _function_ cannot proceed as expected. **Exceptions** make it possible for code to throw an **exception**, a value. Throwing an **exception** unwinds the _call stack_ in that it jumps out of the current _function_, its callers and go back to the first call that executed said _function_. The `throw` keyword raises an **exception** within a _function's_ body. Where `try` and `catch` are separate blocks, where `try` attempts to execute a _function call_ and `catch (error)` catches the parameter (error) and specifies within its block what to do with it. Often, a `throw` keyword comes before a `new` **Error** object built through the **Error constructor**. Said **object** returned from an **Error constructor** has message and stack _properties_. The stack _property_ stores the _stack trace_, where the message _property_ stores the **exception value**. In the case where a _function call_ within a _function_ body throws an **exception** before the end of said _function_, as expected the it will unwind the _call stack_. Thankfully, in **JavaScript** there's the `finally` keyword, which when used its block contains code that should execute regardless of any previous **exceptions** that arise by earlier _function calls_.

##### How does **JavaScript** selectively catch errors?

**JavaScript** doesn't allow you to selectively catch **errors**, but rather it allows you to catch all **errors** or none when a `catch` block exists. All we know is that something in the `try` block raised the **exception**. Moreover, when an **exception** isn't caught before the bottom of the stack, an **error** prints in a browser's console with information about the _function calls_ on the stack when said **error** occurred. Invalid uses of the **JavaScript** language also throws **exceptions**, such uses are referencing a nonexistent variable, looking up a property on `null` or calling something that's not a _function_. You can avert this using an Error **constructor** and a `new` keyword before the call to it. Its body would have `this.message = message;` where message is an argument to the **constructor**, and `this.stack = (new Error()).stack;` providing some kind of _stack trace_. And a `.name` _property_ denoting the kind of error from either **Error**, **SyntaxError**, **ReferenceError**, etc...

###### What are **assertions** and how can they improve a program's functionality?

**Assertions** are a powerful tool to help with **testing**. An **assertion** _function_ typically takes two parameters, the first being the test and the second being a message. If the test fails, it throws a `new` **exception** by calling a **constructor** that returns an **Error object** with `this.message = message;` as its _property value_. **Assertions** make **testing** more specific with what went wrong, thus making them a handy tool in _debugging_.
