# What is a **pattern**?

**Patterns** are reusable solutions or templates that solve common _programming_ problems. Being reusable, **patterns** are general and not a one size fits all solution. They adapt to fit the problem at hand, and expand a programmer's vocabulary.

# What are _pattern-ity testing_, **proto-patterns** and the **_rule of three_**?

**Proto-patterns** are new solutions that haven't been rigorously _tested_ yet due to their infancy. After _pattern-ity testing_, a **proto-pattern** evolves to be a **pattern**. A **pattern** is 'good' upon meeting certain criteria, firstly, it has to solve a particular problem, innately being a solution. Said solution has to be not obvious, have a proof outlining the **pattern's** concept, and describes a relationship between the code, system structures and mechanisms. The **_rule of three_** determines the validity of a **pattern**, the rules are: fitness of purpose, which considers how is the **pattern** successful. Second, usefulness, considering why the **pattern** is successful.

# What is the structure of a **design pattern**?

The structure of a **design pattern** starts off with a rule establishing the relationship between _context_, a system of forces that arises in the _context_ and a **configuration** that allows the forces to resolve within said _context_. **Design patterns** should have a **pattern name** and description, a _context outline_ determining where the **pattern** would be most effective. A **pattern** has to have a problem statement, being the problem that the **pattern** addresses. It then describes the solution in a series of steps. Then the **pattern's** design describes how the user's behavior interacts with it. There's also an implementation guide for the **pattern**, a diagram then describes the **pattern** classes, examples outlining usage, co-requisites if required, relations to other **patterns**, known usages and the author's comments.

# How do you write **design patterns**?

When writing new **design patterns** one should consider some points, the practicality of the **pattern**, it has to solve recurring problems as opposed to being a speculative solution. **Patterns** maintain best practices. They should be transparent to users and serve developers, and has no impact on UX. **Patterns** don't have to be original, instead they're about applicability even if the solution is tedious. **Patterns** need a strong set of examples to showcase the practicality of it in different applications.

# What are **anti-patterns**?

**Anti-patterns** describe a bad solution to a problem resulting in a bad situation, or describing how to get out of said bad situation and get to a good solution. A perfect design could itself be an **anti-pattern** due to its application _context_. Examples of **anti-patterns** in **JavaScript** are polluting the global _namespace_ by defining a lot of **variables** in the _global context_. Passing strings to `setTimeout` or `setInterval` as it triggers the use of `eval()` internally. Modifying the `Object` class prototype is also an **anti-pattern**. The use of **JavaScript** in an inline form as it's not flexible. The use `document.write` is also an **anti-pattern** because it writes to the **DOM** after the whole page has loaded, adversely affecting performance.

# What's the **facade pattern**?

The **facade pattern** is an API design pattern that shows what the library user should use through exposing simple methods that hide unnecessary code to its function, improving usability and obscuring the private parts that shouldn't be available to the outside world.
