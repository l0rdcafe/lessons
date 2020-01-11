# What is information hiding?

Information hiding is a technique that helps achieve deeply abstracted modules.
It refers to the obfuscation of design decisions within the implementation
including high-level algorithms, data structures as well as low-level details
for storage and default cases. Hiding information drastically reduces
interface complexity of an abstraction. This also leads to easier
evolution of the module given that the interface is simplified enough
and encapsulates implementation details leading to less coupled dependencies.

# What is information leakage?

Information leakage is the opposite of hiding and refers to when design details
of the implementation leak into multiple abstractions' interfaces. This leads
to greater coupling between modules and thus requires greater change amplification.
Information leakage can occur not just in interfaces, an example of which can be
a case where more than one class require a certain file format. Consequently,
should the format change, said change would have to occur in all the associated classes.

# What is temporal composition?

Temporal composition is one of the main causes of information leakage. It refers to
composing a system based on the sequence of operations as opposed to designing an abstraction
based on the common information needed among modules. An example of temporal composition is
designing a system that reads/writes a certain file format using 2 classes (one for reads,
one for writes), which causes information leakage. The knowledge required to perform a task
should be the basis for designing abstractions rather than the order of tasks.

# What is overexposure?

Overexposure is a feature of leaky abstractions where the module requires its clients
to learn about its less used functions.

