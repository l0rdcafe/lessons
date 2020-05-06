# Bridge

A bridge decouple an abstraction from its implementation allowing for greater
variation in both. Traditional OO inheritance can couple concrete classes implementations
to those of base classes. Bridges come in handy when an interface/abstraction's implementation
is subject to change, maybe even at runtime. Another case when bridges are useful is when the
interface abstraction and implementation need to be extensible via subclassing. Moreover,
bridges can also be used when clients should be unaffected by changes to the implementation.
A bridge allows for configuration of an implementation at runtime by decoupling an interface
from its implementation. It also removes the need to re-compile the abstraction class and
its clients when the implementation changes. Bridges also allow for more extensible interfaces
and implementations, and help obfuscate implementation details from clients. Implementing
a Bridge has a few things to consider such as the implementor, which implements the abstraction.
Another issue is figuring out which implementor to instantiate, which could be by having it
set in the constructor or having a default implementor that changes after a list grows
past a certain size.

# Code Example

```ts
class SingleAppClient {
  private getToken: () => Promise<string>

  constructor(getToken: () => Promise<string>) {
    this.getToken = getToken
  }
}

const getTokenImplementation = async (): Promise<string> => 'token'
const singleAppClient = new SingleAppClient()
```
