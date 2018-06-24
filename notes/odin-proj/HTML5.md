# How is an _HTML5_ document structured?

_HTML5_ introduced a new structure to its documents, within the `<body>` live its elements, the `<header>` comes first nestled at the top of the page, often including navigation, a heading, etc...A `<nav>` element often exists within a `<header>` element, and should include hyperlinks to other pages, table of contents. The `<article>` element identifies independent transferrable content that may be reusable or shared. Moreover, the `<section>` element generally includes a heading, the content is generic and provides _hierarchy_ within the page. `<aside>` element is a block holding content such as _sidebars_ that is auxiliary to the information on the page, it appears on the sides of a page. Lastly, a `<footer>` element located at the bottom of its parent identifies the closing block of page.

## What are _element attributes_?

_Element attributes_, placed in opening **HTML tags**, used to define a characteristic to an element such as **ID**, _class_, identifying either an element or a _class_ of elements respectively. _Class selectors_ target a group of elements, while **ID selectors** specifically target one element to apply styles to.

## Where should your **CSS** live?

**CSS** should always live on an **external** _stylesheet_ linked from the _HTML page_ within the `<head>`, to ensure smoother performance and save a lot of heartache for users and everybody.

### What image and links for them _attributes_ make them effective and accessible?

_Attributes_ for images should include a **highly** descriptive text of the image displayed. Should the image be **irrelevant**, the value of the **alt** _attribute_ is blank so that screen readers ignore it instead of reading the image file name. Moreover, if an image is highly _irrelevant_, is preferably included as a **CSS** background image rather than an `<img>` element.
