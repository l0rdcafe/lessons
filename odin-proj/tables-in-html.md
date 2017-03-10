# When should you use **tables**?

**Tables** in _HTML_ display _data_ in a **legible** and **streamlined** manner, the _data_ must be intuitively appropriate to a grid-like presentation for the use of **tables** to be justifiable.

## What is the structure of a **table**?

A structure of a **table** includes the following _nested tags/elements_, starting off with the `<caption>` _element_, which directly follows the _opening_ `<table>` _tag_ and is at the top of the **table** by _default_. The `<thead>` _element_ follows and signifies the _header_ of the **table**, it follows the `<caption>` _element_ and precedes the first `<tr>` _element_ with tags as _child elements_, defining the **table's** header. `<tbody>` _element_ follows and it defines the **body** or the most important _data_ of a **table**. Lastly, the `<tfoot>` _element_ comes at the end to signify the _footer_ or the last section of a **table**. Within the `<thead>` _element_ lives the first `<tr>` (_table row_) and has its own unique `<th>` _elements_ (_table headings_, like a `<h1>` element), each `<tr>` has _child elements_ of `<td>` to define the _data_ in each **table cell**.

### How can you combine _multiple cells_ in a **table**?

Combining _multiple cells_ is possible using the **colspan** and **rowspan attribute** within the _opening tags_ of either `<td>` or `<th>` _elements_. Its _value_ is numeric and defines the number of either combined **columns** or **rows**.

## Why should you be careful when using **padding** and _borders_ in **tables**?

You should be careful when using **padding** and _borders_, because some _elements_ add their own _borders_. The **_border-collapse_** _property_ should in **CSS** specifies what the **table** selector's _borders_ look like, a **_border-collapse_** _property_ can have a _value_ of either _separate_ (**default**), _collapse_ (**unifying all borders**), or _inherit_. Hence, the care required when applying _borders_ to a **table**. Moreover, when using **padding** on **tables** one should be careful what they're **padding**, and how that may affect how the _data_ displays as well as the size of **columns**, _rows_ and **_cells_**.

### How do you align _text_ within a cells in a **table**?

_Text_ aligns within a _cell_ using the **text-align** _property_ in **CSS**, but that aligns the _data_ or _text horizontally_ with the known _values_ of **center**, _left_, and **_right_**. Moreover, _text_ also aligns using the **vertical-align** _property_, which has _values_ of **top**, _middle_, and **_bottom_** among others.
