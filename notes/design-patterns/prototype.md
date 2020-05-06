# Prototype

Prototype is a creational pattern that specifies a base prototype
instance that new objects of that kind are copied from. The Prototype
pattern should be applied when a system's products representation, creation
and composition should be independent or the objects to be instantiated
are created at runtime, to avoid factory hierarchy overload or when a class
instance can only have few combinations of state. Prototypes obscure the details
of concrete classes from clients. Some benefits of this pattern are the flexibility
to create/delete objects during runtime, the ability to specify new objects by
varying values and structure that behave differently depending on the values
passed by a client. This reduces the need for subclassing and complex class
and factory hierarchies. Implementing the Prototype pattern requires a prototype
manager to keep a registry of available prototypes and the deep clone operation for objects,
which get tricky for objects with circular references. The last thing to consider
would be the initialization of clones in the case that clients need to provide
values for the object to be cloned. This could be mediated using an initialization
method on the prototype itself.

### Code Example

```ts
Object.prototype.foo = "foo";
const person = {
  name: "bar"
};
console.log(person.foo);
// foo
```
