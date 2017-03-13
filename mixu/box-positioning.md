# What are **positioning schemes** and how do they affect the _CSS layout_?

The three types of **positioning schemes** are the _normal flow_ consisting of block, inline and relative formatting context, **floats**, which have a unique of interacting with the _normal flow_ and exist in most modern _CSS grid frameworks_ and **_absolute positioning_** dealing with **absolute** and _fixed_ elements relative to the _normal flow_.

## What is a _formatting context_ and how is it established?

_Formatting context_ is the way in which elements appear according to their context, it could be either **block** or _inline_ depending on the immediate child elements of a parent element.

## What's the difference between **block** and _inline_ elements?

A **block** element appears as a **block** and generates a block-level box belonging to a **positioning scheme**. It also can generate extra boxes to the principal block-level one. Block-level boxes are also container boxes making it a parent box for other elements that establish a _formatting context_ depending on its child boxes if they're _inline_ or **block**. _Inline_ elements do **NOT** form new blocks of content, and appear horizontally. They generate inline-level boxes establishing an inline _formatting context_. Replaced _inline-level_, _inline-block_ and _inline_table_ elements are atomic inline-level boxes because they establish an _inline formatting context_ as single opaque boxes.

### What are anonymous _inline boxes_?

Anonymous _inline boxes_ exist when a **block container** contains text that is not in an _inline-level element_. They're important because they determine the _formatting context_ of a parent element, since most of the time both **block** and _inline_ boxes exist as sibling elements of a parent container. _Inline boxes_ have anonymous **block containers** wrapping them if they have **block** sibling boxes for layout purposes, meaning that they're treated like **block boxes**.

### How do **floats** affect **block boxes** and _inline boxes_?

**Floats** don't change the position of other sibling elements for **block boxes**, but reduce horizontal space for _inline boxes_ making them shorter.

#### How do _inline boxes_ behave when they're too large for a **line box**?

_Inline box_ behavior depends if or not the content's replaced (text) or non-replaced (video or images), if it's non-replaced or the _inline box_ can't split, then it overflows the **line box**, but if it's replaced content then the _inline box_ splits into more boxes which are then distributed in **line boxes** accordingly.

##### How does the `text-align` property behave in relation to **line boxes**?

`text-align` property aligns the text either `left`, `right` or `center` should the **line box** have more width/space in it for the text to have any of the `text-align` values.

### How does the `vertical-align` property behave?

For replaced content, the `vertical-align` property controls the vertical alignment of _inline boxes_ within the **line boxes** and **DON'T** align the **line boxes** themselves. The `line-height` property helps determine the height of a **line box** through multiplying its value by the font height, as well as the height of its containing **inline boxes**. For non-replaced _inline elements_, `line-height` defines the height used in calculation of the **line box's** height. If `line-height` is an absolute value, then the font height isn't involved in determining the **line box** height.

### How does the `vertical-align: middle;` value behave?

The `vertical-align: middle;` value aligns the **line box's** vertical midpoint with the baseline of the parent element plus half the x-height of the parent box (**NOT** the parent element but actually the **line box**). The x-height is the height of the x character given a `font-size`. In other words, a `vertical-align: middle;` value depend on the x-glyph's height of the parent font.

### What is _relative positioning_?

Setting `position: relative;` value on an element doesn't take it out of the normal flow, and positions it relative to its normal position.

#### What is the **float positioning scheme**?

**Floats** originally intended to wrap text around images, but now they're the basis of most **CSS grid frameworks**. **Floats** take the element out of the normal flow, don't affect block-level elements but can affect _line boxes_ in making them shorter to fit the **floated** _element_. **Floats** aren't used in calculating its parent's height, so a `clear: both;` applied to the `parent::after` fixes it and makes the **floats** used to calculate their parent's height, or you can set `overflow: auto;` or any value besides `overflow: visible;` to change the **formatting context** to a **block** one. But the `overflow` technique may cause unwanted scrollbars so the `clear: both;` method is safer.

### What is the **absolute** or **_fixed_** **positioning scheme**?

The **absolute positioning scheme** positions elements at an absolute offset to its containing block, while **_fixed_** **positioning** positions an element relative the _viewport_ fixing it during scrolling.
