# How do _borders_ behave on inline-level elements (excluding inline-block)?

On inline elements, the left and right _borders_ occur once should the content take up more than one line, rather than occurring for each **line box**, and the top and bottom _borders_ do not affect the vertical layout.

## How is the box model calculated for **inline elements**?

Width and height don't apply to **inline elements**, and instead their width and height depend on `font-size` and `line-height` after placed on **line boxes**. `margin-top` and `margin-bottom` don't apply for **inline elements**. `margin-left` and `margin-right` do apply for **inline blocks**, and when set offset the content from other content on the same **line box**. Setting a value of `auto` is equal to `0`.

### What is content-based height?

Setting a `height: auto` value for **floats**, **_inline-block_** and **block elements** causes the `height` calculation to be content-based, meaning that the height will depend on the content. It has two content-based calculations, one for **floats**, **_inline-block_** and **block elements** in normal flow when `overflow` is anything but `visible`, and another one for **block elements** when `overflow: visible`. The `overflow: visible` calculation for **block elements** ignores its floating descendants, so its height collapses to 0\. The `overflow` anything but `visible` calculation for **floats**, **_inline-block_** and **block elements** takes into account its floating descendants. `auto` is default for both `width` and `height` meaning that the elements will expand to fit their content unless a specific value is present.

### How are widths calculated for different **formatting contexts**?

**Block elements** use a constraint-based approach defined by the box model. If either `margin` or `width` is `auto`, then it takes the usable space, subtracts all explicit set values and sets `auto` to the result. **Floating blocks** and **_inline-block_** elements use a shrink-to-fit approach, involving calculating the preferred width (with as little line breaks as possible), the preferred min-width (with max line breaks as possible) and the available width. `width` applies to the preferred width if horizontal space is available, otherwise it's set to the preferred min-width and in the worst case to the available width with some potential overflow.

## How does `margin: auto` behaviorally change depending on the **formatting context**?

`margin: auto` is always equal to `margin: 0` for **floating blocks** and **_inline-block elements_**. Setting `margin: auto` to **floating blocks** and **_inline-block elements_** is equal to setting it to `0`.

### How is width calculated for **block elements** using the constraint-based approach?

`margin-left + width + margin-right = width of the containing block`, the constraint-based approach comes into play when `width: auto` and margins are `auto`, or when `width` is explicit and both margins are `auto`, or when two of the three values are explicit and one is `auto`.

#### How is width calculated for **floating blocks** and **_inline-block elements_** using the shrink-to-fit approach?

If `width: auto`, then the value used is shrink-to-fit. The shrink-to-fit approach is then min(max(preferred min-width, available width) and preferred width). When the available width is less than the preferred width but greater than or equal to the preferred min-width, the available width applies. When the available width is less than the preferred width, the available width applies and the content may overflow.

#### How are an `position: absolute` element's dimensions calculated?

Absolute positioned elements use a combination of shrink-to-fit and content-based algorithms. `top + margin-top + border-top-width + padding-top + height + padding-bottom + border-bottom-width + margin-bottom + bottom = height of containing block`. `left + margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right + right = width of containing block`. If the content dimensions aren't specified, width is a result of using a shrink-to-fit approach and height results from using the content-based approach.
