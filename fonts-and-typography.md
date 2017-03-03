# Why do **fonts** matter?

**Fonts** matter because they impact how a page looks, feels and its text reads to the user.

## What's the difference between a _serif_ and a **_sans-serif_ font**?

A _serif_ **font** has decorative ticks and flourishes at the end of its letters and symbols, whilst **_sans-serif_ fonts** do not have those. An example of a _serif_ **font** would be _Times New Roman_ and an example of a **_sans-serif_ font** would be **_Arial_**.

### What are `font-family` attributes used for?

`font-family` attributes set the _typeface_ for text, the _typeface_ being the actual medium where the **font** lives.

#### How is the active **font** determined in a `font-family`?

The active **font** takes precedence in a `font-family` by order of availability, in case the first **font** is unavailable on the system or not installed, it will go to next and so on.

### Where does the _browser_ actually get its **fonts** from?

_Browsers_ as of late in **CSS3** get **Web fonts** through downloading them off a server that hosts these **fonts**, as opposed to checking locally installed **fonts** of old, which limited the number of **web safe fonts**. _Browsers_ resort to local **fonts** if the **web font** download fails.

### Where can you get more **fonts** and how do you get them onto your page?

The options for importing **fonts** onto a _page_ are wide. **Google Web Fonts** is a free library of **fonts** up for grabs through a simple line of code either in the _html_ `<head>` element, or `@import` in **CSS**, or in **_JavaScript_**, which gives the utmost the control. Moreover, **CSS3** introduced the `@font-face` selector which requires a `src: url()` and `font-family` _properties_ to enable importing of custom **fonts**.

#### What are the disadvantages of using **web fonts**? Of loading your own?

The main disadvantage of using **web fonts** is the download time. On occasion, the download will take longer than the _page_ takes to render, so a millisecond delay might occur, which is why it's good practice to include a _fallback_ **web safe font**. Furthermore, **web fonts** by not being _locally installed_ are prone to render differently on different _browsers_. Loading your own **fonts** has similar _browser_ compatibility issues, but its main disadvantage is that you have to host the **font**.

##### What are the important _properties_ of **fonts** that you can specify using **CSS**?

**Fonts** have a lot of _properties_ specifiable in **CSS**. They range from `font-family`, which defines the _typeface_, to `font-size`, defining its size, to `color`, setting its color, to `font-style`, specifying its styling in _italic_, to `font-weight`, setting how bold the text is, to `font-variant`, specifying if the text should be in **small-caps** or not.
