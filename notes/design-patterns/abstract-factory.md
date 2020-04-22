# Abstract Factory

Abstract factory is one of the main creational patterns in object-oriented
programming. Its intent is providing an abstract interface from which to
derive related subclasses. The motivation for this pattern is to have
a base class defining the shared structure that all subclasses derive from it.
This pattern is applicable in cases where a system should be independent of
how the creation and composition of its products, enforcing a constraint on
related objects being used together, or abstracting away a class' implementation
and only revealing its interface. Abstract factory isolates concrete classes,
meaning it allow controls over the creation of objects and exposes an interface
to clients bypassing the need for client implementations. Moreover, it promotes
consistency in the design of objects that work together. A caveat to an abstract
factory is that adding new types is difficult as it requires extending the factory's
interface as by default the set of objects is fixed.
