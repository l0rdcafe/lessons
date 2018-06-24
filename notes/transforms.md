# What are **transforms**?

The **transform** property enables sizing, positioning of elements in both 2D (x and y axes) and 3D (x, y and z axes) settings.

## What are the _values_ for the **transform** property?

The **transform** property can take a variety of _values_, such as `rotate()`, which accepts deg values, positive _values_ rotating the element clockwise while negative _values_ rotate it counter-clockwise on a 2D plane. Another _value_ `scale()`, which sizes the element on a 2D plane accepting numerical _values_ with 1 being the default scale, so 0.5 would halve the element's size. Moreover, you can use horizontal `scaleX()` and vertical `scaleY()` _values_ to size elements. Another _value_ `translate()` which can also come in `translateX()` and `translateY()` variations, or a shorthand form of `translate(20px, -50%)`. The final _value_ for 2D **transforms** is `skew()`, which accepts deg _values_ like the `rotate()` _value_.

### What is the default **transform origin** _value_ and how can you change it?

The default **transform origin** _value_ is `transform-origin: 50% 50%;`, but using the `transform-origin`, you can change the starting point where the transformation occurs from the default dead center of an element to whichever _value_ you elect. It accepts a range of _values_ from **percentage**, _px_ and `top left` or `bottom right`.

## What is **_perspective_** and how does it work for _3D_ **transforms**?

**_Perspective_** is instrumental for _3D_ **transforms** to take place. You can set the **_perspective_** either within a `transform` property or as an independent property on the desired element to transform's parent element. The larger the `perspective` property's _value_, the deeper the **_perspective_** is. As with `transform-origin`, you can set the `perspective-origin`.

### What are _3D_ **transforms**?

The same _2D values_ for **transforms** apply for _3D_ **transforms** by adding a Z axis, in other words `rotateZ()`, `scaleZ()`, `skewZ()`, `translateZ()`, a set **perspective** is mandatory for _3D_ **transforms** to take place. Shorthand _3D_ **transforms** notation also exist that take the form of `rotate3d`, `scale3d`, `transition3d` and `matrix3d`.

#### What does a `transform-style` _property_ do?

If both child and parent elements are being _3D_ **transformed**, then the child element won't appear in its own _3D_ plane. A fix for this is to apply the `transform-style: preserve-3d;` property with the previous _value_, which allows the child elements to have their own _3D_ plane. If that is not desired, a `transform-style: flat;` rule applies to make the child element(s) lie on a _2D_ plane.

##### What is **backface visibility**?

When elements are **transformed**, face away and show from the back with _3D_ transforms, their backs show. Should that be undesirable, a `backface-visibility: hidden;` rule applies to hide the element when it faces away from the screen. Moreover, `backface-visibility: visible;` is the default rule when an element faces away from the screen.
