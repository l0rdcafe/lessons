# Adapter

Adapter is a structural pattern and it converts an interface to another,
or in other words adapts two incompatible interfaces. It is also known
as wrapper. Adapters are handy when an existing class needs to be reused
but its interface does not match the one for the use case, or when an
adaptive object needs to exist due to unforeseen classes. There are
two kinds of adapters; class and object adapters. Class adapters
adapts adaptee to target as a result it won't work with subclasses
of the target. It also lets the adapter override the adaptee's behavior
since the adapter is a subclass of the adaptee. An object adapter lets
a single adapter work with all adaptees and can also add functionality to
all of them at once. It makes it harder however to add specific functionality
to individual adaptees. An adapter obscures transparency as a middle man,
using two-way adapters can mediate that exposing the existing class' interface
to clients.

# Code Example

```ts
  function mapMenuItems(item: ServerMenuItem): ClientMenuItem {
    const {
      modifierGroups,
      menuItemID,
      calories,
      details,
      images,
      price,
      flags,
      name,
    } = item


    return {
      images: images.map(mapMenuItemImages),
      description: details,
      modifierGroups,
      cals: calories,
      menuItemID,
      flags,
      price,
      name,
    }
  }
```
