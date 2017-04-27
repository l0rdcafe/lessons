# How does margin collapsing affect positioning?

When there are two adjacent vertical margins, the greater applies and the smaller doesn't. Margin collapsing is when adjoining vertical margins of two or more boxes combine into a single margin. Vertical margins can collapse, horizontal ones never do, and margins from **block elements** collapse, meaning that **floats**, **_inline-block_** and `position: absolute` elements' margins don't collapse. For margins to collapse, they have to be part of the same **formatting context**. It's easier to define the notion of adjointness by considering the `margin-top` and `margin-bottom` as rectangles on their own. Given that definition, two margins will be next to each other when they are parent and child margins, margins between siblings, grandparent and parent and child margins, margins from elements with no content. Two margins will collapse if they're not separated by content, padding or borders, or clearance (for **floats**).

## What are **negative margins** and how do they affect positioning?

**Negative margins** are negative value margins often used to position elements.

### What is `overflow` and how does it affect positioning?

`overflow` occurs when a child element is either positioned outside its parent or doesn't fit inside its parent's dimensions. The `overflow` property determines how the overflowing segment of the child element renders. It has a lot of values, its default is `visible` and causes the content to render outside the block box. `hidden` clips the content of the child element and no scrolling is available to view the overflowing content. `scroll` clips the content, and enables the user to scroll through the overflowing content. `auto` depends on the user-agent but often causes a scrolling mechanism for overflowing boxes.

#### What are `max-width`, `min-width`, `max-height` and `min-height` properties?

`max-width`, `min-width`, `max-height` and `min-height` define either a min or max height or width for an element. Percentage values apply if the containing block's width or height is explicitly defined.

##### What are the different values for the `content` property when using `::before` and `::after` **pseudo-elements**?

[Here][1] they are. The `::before` and `::after` **pseudo-elements** interact with other boxes like they were real elements inside their associated element.

### What is the **rendering order** and how are stacking contexts determined in relation to `z-index`?

Browsers render the following visual effects in this order: outer box shadows, background color of element, background image of element, inner box shadows, border of element, content, outline of element. Elements render in the following order: block-level descendants in the normal flow, floats, inline descendants in the normal flow, positioned elements. Stacking contexts are rarer than **formatting contexts**, since most elements don't form new stacking contexts. You can set a `z-index` value solely for positioned elements, positive `z-index` values will render above normal flow and **floats**. If two elements have the same `z-index`, they stack from back-to-front depending on their order in the markup.

[1]: http://book.mixu.net/css/3-additional.html
