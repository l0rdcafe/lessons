# What's the difference between _margin_ and **padding**, and how do _borders_ affect the size of the box?
>Every **element** in an _HTML page_ follows the box model. A _margin_ is the distance or breathing room between the **element** and its surroundings, it lies outside the **element's** _border_. On the other hand, **padding** is similar but in that it's the distance between the **content** and the _border_ within its element. Moreover, _borders_ affect a box's size by virtue of being between its **padding** and _margin_, how wide a _border_ is pushes its _margins_ farther out.


## How can you **center** an element _horizontally_ on the page using _margins_?
You can **center** an element using _margins_ by setting its _margin_ property value to {0 auto;} if it's a **block element**. If it's an **inline** or **text element**, then you can use the {text-align: center;} property.

###### What does it mean to **_collapse margins_**?
* **_Collapsing margins_** spaces **block elements** _vertically_.

### What's the difference between **block**, **inline-block** and **inline** elements in the context of the _box model_?
 >**Block elements** appear as blocks that are as wide as the screen (unless a width is specified) and are displayed _vertically_. **Inline elements**, usually text is displayed _horizontally_ and occupies as much width as its **content** does. **Inline-block elements** are like _block elements_ but are displayed as _horizontal block elements_.

#### When should you specify a **width** for an element as opposed to letting the browser figure it out?
>You should specify a **width** for elements which don't require the whole **width** of the page. _Headers_ and _footers_ usually do, so you may not specify a **width** for them.

##### How do **box shadows** affect element box sizing?
>**Box shadows** do _not_ affect element _box-sizing_, in other words unlike **padding**, **_margin_**, and _border_, it _doesn't_ affect a box's **size**.
