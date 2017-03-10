# What is a _container_ `<div>`?

A _container_ `<div>` is a generic `<div>` _element_ nested directly inside the `<body>` _element_. Its purpose is to allow for more flexible and complex **CSS styling**. Since _browsers_ don't treat the `<body>` _element_ like a normal `<div>`, so it's a good idea to have a _container_ `<div>` within the `<body>` tag.

## When should you use `<span>` versus `<div>`?

You should use `<span>` tags almost always on **inline elements** to apply _styles_. While `<div>` _elements_ are by default **block elements**, so are best used to group **block elements** or chunks of _code_.

### When should you use **ID** versus _class_ **selectors**?

You should use **ID selectors** when targeting one specific _element_. Whereas _class selectors_ assign to a group of _elements_, target a group of _elements_ that are of the same _class_.

## What are good situations for breaking out **styles** into _multiple classes_?

A situation fit for breaking out **styles** into _multiple classes_ could be that some _elements_ require the same **styling**, it's a **CSS optimization** technique used to whittle down the **CSS rules**. When plenty of _elements_ have the same styling, it's a good idea to group them in their own _class_ according to their **styles**.

### How can you use **margins** for _alignment_?

You can use **margins** to _align_ **block elements** _horizontally_ by setting its _value_ to _'auto'_ it centers the _element_ in the middle of the page given its _width value_ and splits the remaining **margin** space evenly on both its sides.
