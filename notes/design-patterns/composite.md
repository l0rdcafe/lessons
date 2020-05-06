# Composite

The composite pattern composes objects into tree structures to break down
class hierarchies. This makes it simpler for clients to interface with
objects and their compositions uniformly. Composites are useful when trying
to represent part-whole hierarchies of objects or when clients should be interfacing
with objects uniformly in spite of their compositions. The consequences of composites
is breaking up class hierarchies into primitive and complex objects, therefore rendering
clients simpler as they treat all composite objects in the same way. The composite
pattern simplifies the addition of kinds of components irrespective of whether they're
a new composite or leaf subclass. A disadvantage of the composite pattern is that it
can make the design too general as it is difficult to restrict components of a composite.
Implementing a composite, having explicit parent references for each component is crucial.
Another point to consider is that sharing components might be beneficial performance-wise
while could cause problems with references to parent classes. Maximizing the component interface
is also important since it allows clients to interact identically with different components.
Another portion is declaring the child management operations and where in the hierarchy
should they live and the tradeoffs that brings. Some composite implementations also enforce
child ordering of components, which could something to investigate during implementing composites.

# Code Example

```tsc
const Link: FunctionComponent<{ url: string }> = ({ url, ...props }) => {
  return <a href={url} {...props} />
}

return <Link url="www.url.com" target="_blank" />
```
