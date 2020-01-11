# What is modular design?

Modular design refers to designing a system in a way such developers are only
exposed to a small portion of the system to make any contributions to it. Modular design
emphasizes very small coupling between different modules. However, since as modules interface,
zero coupling is impossible and thus if arguments to a module's public method change, then
it has to be reflected in the client module calling it. Modular design essentially aims
to minimize dependency between modules in a software system.

# What is an interface?

A module's interface is what a developer/client calling the module should know in order to
properly use it. Interfaces describe what a module does.

# What is an implementation?

On the other hand, module implementation refers to how the module does what its interface
says it can do. Implementations should be irrelevant to other modules. An example of a good module
is one where the interface is much simpler than the implementation.

# What are the contents of an interface?

An interface has formal and informal information. The formal aspect on an interface
includes method signatures with their parameters, types, return types, and exceptions thrown.
The informal aspect refers to a high-level overview of the interface's behavior. (i.e create new user)
Informal information is usually annottated in code comments and cannot be validated programmatically.
Informal portion is often bigger than formal.

# What is an abstraction?

Abstraction describes a simplified overview of a system by ommitting non-essential details.
By that logic, an interface is an abstraction for a module's implementation. An abstraction is faulty
when either it includes too much or too little unnecessary details. A false abstraction is one which
omits important details.

# What are deep modules?

Deep modules are ones that provide a simple interface that performs powerful functionality. A module's
cost is based on the complexity of its interface.

# What are shallow modules?

Shallow modules refer to the opposite of deep modules, where the interface is barely simplified from
the implementation. An example of a shallow module could be a wrapper class for a fixed sized array in JS.

# What is classitis?

Conventionally, classes are often small in sizes, which could lead to classitis where classes are broken
down further into small classes with small methods, further increasing complexity of the system.
