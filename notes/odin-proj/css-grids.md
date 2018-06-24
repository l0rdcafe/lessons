# Why are **grids** effective for helping site _layout_?

**Grids** are highly effective for helping site _layout_ because they provide a kind of map for how the a site looks. These days, almost all _websites' layouts_ are **grid-based**. An example of a simple **grid** would be a main content section in the middle, a nav to the left, a smaller section floated to the right of the main section but has another possibly sidebar to its right. **Grids** divide a _site's_ page into columns and further assigning them sections, giving it context, organizing and architecting its information and subsequently guiding the user seamlessly through it.

## What are the major different types of **grids** in use today?

The three major kinds of **grids** in use today are _basic_, **fluid** and **_responsive_**. [_Basic **grids**_][1] constitute floated `<div>` columns with **percentage** _width_ values assigned to the `<div>` _elements_ within a parent `<div>` with having the following **CSS** applied to it. `.parent-div::after {content: ""; display: table; clear: both;}` to avoid the parent collapsing to zero since it has no set height. Moreover, the following **CSS** with _vendor prefixes_ for compatibility and to ensure boxes' sizes remain unaffected by **padding** and _borders_ should apply in that specific order `*, *::after, *::before {-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}` **Inner** _gutters_ are then created between the columns by fixing a horizontal **padding** value on all but the last of its kind. You can also create **outer** _gutters_ by also horizontally **padding** its parent `<div>` and its child `<div>` columns. [**_Fluid grids_**][2] use **em** and _rem_ units in reference to a **percentage** `font-size` to avoid the inaccurate usage of _pixels_. A **percentage** value for the `body` `font-size`causes the _browser_ to apply its default `font-size` thus making the styling more **fluid** when using **em** and _rem_ units in defining `font-size`, **Fluid grids** use a formula to calculate **percentage** or **em** and _rem_ unit values `target / context = result` The units for the `target` and `context` are _pixels_ and the `result` is in either **em**, _rem_ or if multiplied by 100 in **percentage**. Child _elements_ inherit **em units** from parent _elements, while _rem units_ are not inherited. **_Responsive grids_** are the most efficient and commonly compatible kind of **grid**. They use **media queries** to determine the device's screen size in pixels and then apply **CSS styles** solely if the **media query** for that case responds positively.

### How could you design your own **grid**(on paper)?

You can design your own **grid** on paper by dividing the page into columns of different widths stacked how they should look, depending on the content and the intended functionality for the user.

#### How can you build your own **grid** in **CSS**?

[Check][1] [these][2] [out][3]!

[1]: https://css-tricks.com/dont-overthink-it-grids/
[2]: https://alistapart.com/article/fluidgrids
[3]: webdesign.tutsplus.com/tutorials/a-basic-responsive-grid-plus-handy-css3-media-query-reporter--webdesign-5121
