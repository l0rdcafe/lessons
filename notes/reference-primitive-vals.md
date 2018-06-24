# What are primitive values?

Primitive values in **JavaScript** include strings, `undefined`, `null`, Booleans and numbers. They're copied by value as opposed to reference values. A stack stores primitive values.

## What are reference values?

Reference values in **JavaScript** include objects and arrays. They are different to primitive values in that mutating the original object will mutate its reassigned object. A heap stores reference values. The variable's stored as a pointer on the stack, pointing to an object in the heap. Thus when a reassignment happens, the new pointer on the stack is still pointing to the same object in the heap. As a result, the object is not copied as it has its same place in memory unlike primitive types. Instead of copying the pointer to an object in memory, you could use `Object.assign({}, myObj)` to create a new object in memory. `Object.assign` actually merges two objects though. But `Object.assign` does not create a deep clone of an object, meaning that other reference values within said object are still pointers to the same references in memory. For arrays, to copy an array not its pointer, you can use the `.slice()` method.
