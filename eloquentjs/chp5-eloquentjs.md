# What are **higher order functions**?

**Higher order functions** are **functions** that operate on other **functions**. They serve as intermediaries to execute a program more eloquently, though at a cost of complexity and inefficiency when overdone.

## What does **abstraction** mean in a programming context?

**Abstraction** in programming is when a program's written at a higher level, or with more complex **higher order functions** and _data structures_.

## What types of **higher order functions** are default methods that manipulate _arrays_?

The `forEach` **method** on _arrays_ takes two _arguments_, an _array_ and a **function** to execute `forEach` _array_ element. All **higher order _array_ methods** return an _array_ and take two _arguments_ except `reduce`. `map` **methods** work like `forEach` and take `filter` **method** on an _array_ takes two _arguments_ and executes its second _argument_ **function** on each element. The first _argument_ is an _array_ and the second a **function** that returns a value. Lastly, `reduce` takes three _arguments_ instead, the first being an _array_, the second being an accumulator **function** and the third being the index of where the reduction starts. Instead of returning an _array,_ `reduce` returns one combined value of the entire _array_.

### What is **JSON**?

**JSON** is an ubiquitous format to represent data as **objects** and _arrays_ in all programming languages. It stands for **JavaScript Object Notation**. It has the same syntax as regular **objects** and _arrays_, but instead all quotation marks enclose all **object** _properties_.

#### How can you pass specific _arguments_ to **higher order functions**?

`apply` **method** takes two _arguments_. The first _argument_ is a **function** _argument_, the second an _array-like_ list of _arguments_. It serves to set _arguments_ specifically for a **function**. `bind`
