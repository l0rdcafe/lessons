Every element in an HTML page follows the box model. A margin is the distance or breathing room between the element and its surroundings, it lies outside the element's border. On the other hand, padding is similar but in that it's the distance between the content and the border within its element. Borders affect a box's size by virtue of being between its padding and margin, how wide a border is pushes its margins farther out.

You can center an element using margins by setting its margin property value to {0 auto;} if it's a block element. If it's an inline or text element, then you can use the {text-align: center;} property.

Collapsing margins spaces block elements vertically. Block elements appear as blocks that are as wide as the screen (unless a width is specified) and are displayed vertically. Inline elements, usually text is displayed horizontally and occupies as much width as its content does. Inline-block elements are like block elements but are displayed as horizontal block elements. You should specify a width for elements which don't require the whole width of the page. Headers and footers usually do, so you may not specify a width for them.

Box shadows do not affect element box-sizing, in other words unlike padding, margin, and border, it doesn't affect how a box's size.
