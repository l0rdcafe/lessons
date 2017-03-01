# What is an _expression_ and what's a **statement**?
>An _expression_ is any code that produces any type of **value**. On the other hand, a **statement** is a full sentence in **JavaScript**, they should always end with a **;**. A list of **statements** constitute a _program_.
## What's a **variable**?
A **variable** is a way for a **JavaScript** _program_ to latch onto and save _data_ in the _program's_ **environment**. **Variables** aren't absolute in that multiple **variables** can have the same _value_.
### What are **keywords** and _reserved words_?
**Keywords** and _reserved words_ are specified words that **cannot** be used to declare **variables** in the _program's environment_, they're reserved for future use in **JavaScript**. The list includes (_break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import in
instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield_)
## What are **functions**?
**Functions** are pieces of _program_ wrapped in a **value**, said **values** are applied to run the _program_. An example is the **variable** _console.log_, which outputs a _program's_ result.
### What's the _control flow_ and how can you change it?
The _control flow_ of a _program_ is the order in which the _program's_ executed and is usually from top to bottom **statements**. However, you may change the _control flow_ through the use of **conditionals**.
## What are **conditionals**?
**Conditionals** are **statements** used to change a _program's control flow_ from linear execution to a **conditional** execution based on **Boolean values**, offering two routes depending on an _expression's_ **Boolean value**.
### What's a _loop_ and how can you make one, what are **do** and _while_ and **_for_** _loops_?
A _loop_ is a type of _control flow_ structure that repeats the _program_ until it meets its terminating condition. You can define a _loop_ condition using the _while_ **keyword** and specifying an _expression_ as the _loop's_ condition. Similar to _while_ **keywords**, a **do** _control structure_ executes the _program's_ body at least once and checks to see if its terminating condition was met or not after the first execution. Finally, a **_for_** _loop_ is a shorthand version of the _while_ **keyword** that's written like **'for (var i = '2'; i < 4; i++ )
console.log(i);'**. You should use **_for_** _loops_ when you know how the exact number of _loops_ you want to carry out, meanwhile _while loops_ should be use when you don't know the specific magnitude.
#### How do you **break** out of a _loop_?
You can **break** out of a _loop_ using the **break; statement**. A **break statement** is helpful for breaking out of _infinite loops_ which are extremely undesirable in _programs_ as they'd run until literally until the computer can't anymore.
#### How do you dispatch on a **value** with **switch** and _case_?
You can dispatch **values** with **switch** by declaring the situation, and then defining each _case_ with a **break statement** after each one to end the loop when a _case_ is met.
