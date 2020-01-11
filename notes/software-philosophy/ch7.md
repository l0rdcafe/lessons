# What is a pass-through method?

Good abstractions are layered by nature where each layer has a different
abstraction. A pass-through method refers to a method that only
invokes another and does little else. This is often caused by different
layers having identical abstractions. (i.e usually function signatures)
Pass-through methods also cause change amplification, where changes need
to be reflected across different functions.

# What is a dispatcher function?

A dispatcher function refers to a function that determines
which method to invoke based on its arguments. In this case,
interface duplication is acceptable.

# What is the decorator pattern?

Decorator pattern (AKA wrapper) are a way to extend the functionality
of an existing class by adding special functionality to the initial
generic class. Decorators can be dangerous when overused as they
tend to contain an increasing amount of pass-through methods causing
increasingly shallow classes. To mediate that, one should ask if
the new functionality can be added to the base generic class, if
the new functionality can be merged with the use case instead of
needing a decorator, can the new method be merged into another decorator,
and whether the new functionality needs to wrap the existing one.

# What is a pass-through variables?

Pass-through variables describe a kind of variable that passes through
a number of methods. To fix that, a context object can be used to store
a an application's global state.
