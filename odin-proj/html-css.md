# Why do we separate _HTML_ and **CSS**?

_HTML_ and **CSS** are separate to have the _structural/content elements_ (i.e _HTML_) in a standalone file than the **styling elements** (i.e **CSS**) which has its own _stylesheet_. Its purpose is to avoid code duplication, having the ability to change **styling** without touching the _content_, and _reduce bandwidth_ usage.

## What are _class_ and **ID** selectors?

**ID's** and _Classes_ are selectors to identify specific _HTML tags_ or portions of content. A group of _elements_ can have the same _class_, whereas **ID's** are unique to one _only_. In **CSS**, **ID's** have a prefix of "#", while _Classes_ have a prefix "." Both are _HTML attributes_.

### What are _tags_?

An _HTML element_ initiates with an _opening tag_ and terminated with a **closing tag**, the _tags_ combined with the content the middle make an _HTML element_. An _HTML tag_ is a string within "<>" which signifies an _HTML element_, telling the _browser_ for example that this `<p>` _element_ should display as a block of _text_.

### What are _attributes_?

An _HTML attribute_ provides information about any _element_, always specified in the **opening tag**, and often comes in pairs "name=value". Examples are "alt, href, id, src, style, title"

#### What are **forms**?

_HTML_ **form** is an _element_ that defines a _form_ used to collect **user input**.

#### What is a _div_?

A `<div>` _tag_ is a way to divide the _HTML document_ into specific **block** sections _vertically_.

## What are **selectors**?

A **CSS selector** is an _HTML element_ specified before "{}" to signify that it's being **styled**.

### What are **properties**?

A **CSS property** is a _styling property_ assigned to a _selector_, and has a **value** entailing the _styling_ on the _selector_. (ex: div {border-radius: 25px 20px 0 0})

### What are **values**?

A **CSS value** is a characteristic that follows a _property_ indicating its _styling effect_ on the **selector**, and subsequently the _HTML element_.

## What is the _query string_ in a **URL** and what does it do?

A **URL** _query string_ is a part of the **URL** which contains data that _doesn't_ fit into a **hierarchical path structure**, it specifies a location on the **URL** requested by the _browser_ to visit on the respective **web server**.

### What's the difference between _pixels_ and **em** units?

_Pixels_ are **fixed** units measured by the _pixel-count_ relative to a screen, whereas **em** is a **scalable** unit that is **relative** to _font size_ making it a more flexible unit.

## How do **CSS styles** get _inherited_?

_Inheritance_ of _properties_ is the mechanism where certain _properties_ pass to _children elements_ from their **parent elements**. _Inherited properties_ include **font-family**, **font-size**, **color**, etc...Though, not all _properties_ are _inherited_ such as **margins**.

### What are two **CSS attributes** you can change to push around an _element_ on the page?

Two **CSS attributes** which can push around _elements_ on a page are **position** and **_float_**.

#### What are the three ways to include **CSS** in your project?

The three ways to insert **CSS** into a project are through _external stylesheet_ (a separate and linked **CSS stylesheet**), an _internal stylesheet_ (within the _HTML file_) and **inline style** (adding style attributes to _HTML tags_ and _elements_).

##### What is a **User Agent Stylesheet**?

A **User Agent Stylesheet** is a _default stylesheet_ within a **browser** which will display documents in a legible manner.

###### Why use a **CSS reset**?

A **CSS reset** is a compressed set of **CSS** rules which reset the _styling_ of all _HTML elements_ to a ubiquitous **baseline**.
