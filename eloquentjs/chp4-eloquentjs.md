# What are **data structures**, _arrays_, **_objects_** and _properties_?

**Data structures** are a more complex **variable** that enable a _program_ to grasp more sophisticated _data_. _Arrays_ are the first kind of **data structure** written between [] with its elements separated with , _Array_ elements are automatically indexed starting from 0\. An _array_ is essentially a list of **variables** for _data_ to be more effectively grasped by _programs_. _Arrays_ have both _properties_ and **methods**. Their _properties_ range from .length to any, and their **methods** include **.push()**, to add elements at the end of the _array_, **.pop()**, which removes the last element of an _array_. There's also **.join method** which displays an _array_ without the separating commas. Moreover, **_objects_** are another kind of **data structure**. They're written between {} and each **_object_** has its custom _properties_. All values have _properties_ which determine a characteristic of a value. (ex: myWord.length, Math.min, etc...)

## What are _methods_?

_Methods_ are **functions** of an **object**. They're called like _properties_ with a dot after the **object** name.

### What **operators** affect an **object's** _properties_?

The **unary operator** `delete` deletes _properties_ of an **object**, here's an example `delete obj.prop1;` Moreover, there's also the **binary operator** `in`, which returns a **Boolean** after checking if a _property_ exists within an **object**. It's written like `"prop1" in obj;`, since `prop1` doesn't exist, this will return `false`. Furthermore, you can also loop over an **object's** _properties_ using a **JavaScript** `for` loop. It looks like this `for (var x in y)`

#### How do you compute correlation between **variables**?

The **phi** coefficient provides a formula to calculate the correlation between two **variables** at a time giving a value from -1 to 1, indicating a negative or positive correlation. Here's a much better [explanation.][1]

##### What are the `arguments`, `window` and `Math` **objects**?

Whenever a **function** call happens, a special **variable** named `arguments` exists in the program environment. It has a `length` property but unlike an _array_, doesn't have `indexOf` or `slice` **methods** on it. The `Math` **object** contains mathematical **methods** and others, such as `Math.random`, `Math.min`, etc... The `window` **object variable** refers to the **global object** of the program as stored on browsers as a **DOM relic**.

[1]: http://eloquentjavascript.net/04_data.html#h_YwedOm6SqZ
