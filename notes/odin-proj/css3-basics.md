# What are **selectors**, and how specific should you be when targeting _elements_?

**Selectors** are the first component of **CSS** syntax and select an _HTML element_ for styling with a _property_ and subsequently its **value**. Unless otherwise specified, a targeted _HTML element_ AKA a **selector** would _apply styles_ to **all** _elements_ of that type, so depending on what needs styling, you should be as specific as possible in order not to _apply style rules_ to unwanted _elements_.

## How can you select elements with _class_ or **ID attributes**?

An _HTML element_ can have a _class_ or **ID attribute**, which enables **selectors** to target _HTML elements_. Moreover, you can target a specific value of an **attribute's content**, with a _preceding the = sign. (ex: h1[alt_=post] {color: red;} given the following _HTML_:

`<h1 alt="post_1"></h1>`

`<h1 alt="post3"></h1>`

### How can you select _elements_ inside other _elements_?

You can select an _element_ inside another _element_ by typing its parent _element_ preceding the desired _element_.

`ex: <div><img></div>`,

To target the `<img>` _element_, the **CSS** _selector_ would look like this: div img {;}

### How can you target the **immediate child** of an _element_?

You can target the **immediate child** of an _element_ by using the _:first-of-type_ **pseudo selector**, or depending on the situation, _:first-child_ **pseudo selectors** are also usable.

#### How can you target a _class_ inside a _class_, and a _class_ inside an **ID**?

You can target a _class_ within a _class_ like how you would target **child elements**, (ex: .class .class2). You can also target a _class_ inside an **ID** or vice-versa in the same way (ex: #id .class).

##### How would you target all _links_ inside li **elements** that have the _class_ 'bunny' inside the unordered list with the **ID** 'objects-that-hop'?

If you wanted to target all links in li elements with a _class attribute_ of 'bunny' inside the unordered list with the **ID attribute** of 'objects-that-hops' (**Solution**: `ul#objects-that-hop li a.bunny {;}`)

### What are the three ways to include **CSS** in your project?

The three ways to include **CSS** in your project are either **inline styling** found in opening **tags** of _HTML elements_, or you can find an **internal stylesheet** often found in the `<head>` _element_ on an _HTML page_. Or most efficiently, you can use an **external stylesheet**, which linked within the `<head>` _element_ of the _HTML file_.

## What's the difference between **em**, **_rem_**, and _%_ to specify sizes?

**em units** in **CSS** scale _elements_ with **non-default font size**, some of those _selectors_ can be **margin**, **_padding_**, _width_, _height_, _line-height_. They **shouldn't** apply to _font-size_. A rare case of using **em units** for _font size_ is in a _dropdown menu_ as it uses the **default font size** as the reference point for how it'll appear on your _browser_. **_rem units_** pertain to _layout items_ as they are not limited by the same constraints as **em units**. Since **em** uses the _font size_ of the _element_ itself as its reference to calculating how to display the _elements_ depending on your _browser's settings_. While **_rem_** isn't as constrained, rather **_rem_** calculations depend on the _font size_ of the _HTML element_ itself. Moreover, **em** and **_rem_** should **NOT** define a _multi column layout_, and rather _%_ should in that case. **em units** apply when needing sizing that depends on the _element_ other than the root, while **_rem units_** should apply when wanting to scale for the _browser font size settings_ and **em units** are inapplicable.

### What is a **CSS reset**?

A **CSS reset** is a short, _compressed_ (_minified_) set of **CSS rules** that _resets_ the styling to a **specific baseline**. Its purpose is to avoid the hassle of each _browser's default user agent stylesheets_ and create a **benchmark** for _styling_.

#### Which stylesheet has preference if you import more than one and there are overlapping styles?

The most specific _stylesheet's_ rules will have preference, given that plural _stylesheets_ with overlapping styles apply on the same _HTML file_, meaning that the **inline styles** will have preference.

**Problem:**

`<body style="color:yellow"><h1 class="main-title" style="color:green">Howdy!</h1></body>`

**Which CSS rule will have preference?**

(**Solution:** color: green), **inline styles** always have preference over **external styles**.
