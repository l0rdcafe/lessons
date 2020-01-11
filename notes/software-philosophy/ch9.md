# How do you determine degrees of coupling?

The aim of combining code is to reduce complexity.
Separating is the right call when the components are truly
independent. While coupling works well when two components
share the same information, are used together only if bidirectionally
in other words when each module uses the other, they overlap conceptually
in that they both fall under the same umbrella, if they simplify
the interface, to eliminate duplication and lastly when it
becomes harder to understand a piece of code without the other.
When it comes to separation, it's good practice to separate
general-purpose and special purpose code as coupling both
would cause information leakage.

# How do you determine joining and splitting methods?

Like classes, methods are subject to subdivision as well. A good
baseline when designing methods is that a method should do
one thing and do it completely. Conjoined methods is when in order
to understand the child method, you need to understand the parent
caller method.
