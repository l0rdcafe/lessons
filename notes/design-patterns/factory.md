# Factory

Factor is another creational pattern and it defines an interface
for creating an object, but defers the instantiation to subclasses
letting them make the decision on which class to instantiate.
Factory methods are useful when a class cannot predict what class
of objects it needs to instantiate, a class requires its subclasses
to define the objects they create, or localizing instantiation
logic to a helper subclass. A disadvantage of factory methods
is that clients might have to subclass a creator class just
to instantiate a concrete object. Factory methods also provide
hooks for subclasses to extend the functionality of an object
beyond its default implementation. It also connects parallel
hierarchies when clients call factory methods directly instead
of doing so via a creator. There are two main varieties of factory
methods, one is where the creator is an abstract class with no
implementation for the factory method it declares, and the other
is when the creator is a concrete class that provides a default
implmentation for the factory method. The former requires
subclasses to define an implementation while the latter does not.
Another variation is to have parametrized factory methods where
they take in a parameter identifying the kind of object to create.
