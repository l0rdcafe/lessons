# Decorator

A decorator attaches additional properties to an object dynamically.
Decorators are used to add or remove responsibilities to objects dynamically
without affecting other objects, or when subclassing is impractical.
Decorators provide benefits such as being more flexible than static inheritance
due to their dynamic nature. It also avoid class inheritance clutter by only
attaching responsibilities as they are needed. The disadvantages of decorators
are that the decorator and the component are different, so an object's identity
should not determine the responsibilities attached to it. Another is that use
of decorators can cause a system to have many small objects that are almost identical
in properties but different in the way they are interconnected making the learning
curve steeper as well as increasing the debug difficulty. Some considerations when
implementing a decorator are interface conformance by having a decorator's interface
conforming to the component it decorates. Another is keeping component classes lightweight
focusing on defining an interface and not storing data, which will also improve
interface conformity. A decorator changes the skin of the object as opposed to its guts.

# Code Example

```ts
import Autocomplete from './autocomplete'

const DecoratedAutocomplete: FunctionComponent<{ Loading?: JSX.Element }> = ({ Loading }) => {
  if (Loading) {
    return <Loading />
  }

  return <Autocomplete />
}
```
