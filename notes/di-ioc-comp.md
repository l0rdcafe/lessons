# What is dependency injection?

Dependency injection is a technique in software engineering where an object supplies another object's dependencies by passing them to it. DI applies in cases when testing functions becomes cumbersome without injection of dependencies and thus through DI, tests become more granular. The big caveat to DI is that it makes you restructure your program to make it testable. Dependency injection is a more specific subset of inversion of control.

## What is IoC?

When the number of dependencies gets large, inversion of control comes in to fix it. It uses a separate function to bind a deps object to the function that needs dependency injection.

### What is composition?

Inheritance is when you design your types or classes around what they are, while composition is when you design your types or classes around what they do. Composition solves inheritance's limitations. Instead of using classes and extending for inheritance, functions detailing types' actions form the essence of composition.