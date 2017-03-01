# How is an _HTML5_ document structured?
>_HTML5_ introduced a new structure to its documents, within the ````<body>```` live a number of elements, the ````<header>```` comes first nestled at the top of the page, usually including navigation, a heading, etc...A ````<nav>```` element usually exists within a ````<header>```` element, and should include hyperlinks to other pages, table of contents. The ````<article>```` element identifies independent transferrable content that may be reused or shared. Moreover, the ````<section>```` element generally includes a heading, the content is likely generic and is used to _provide hierarchy_ within the page. ````<aside>```` element is a block holding content such as _sidebars_ that is
auxiliary to the information on the page, it appears usually on the sides of a page. Finally, a ````<footer>```` element usually located at the bottom of its parent identifies the closing block of page.


## What are _element attributes_?
>_Element attributes_, placed in opening **HTML tags**, are used to define a characteristic to an element such as **ID**, _class_, identifying either an element or a _class_ of elements respectively. _Class selectors_ should be used when targeting multiple elements, while **ID selectors** should be used when specifically targeting one element to apply styles to.

### Where should your **CSS** live?
>**CSS** should always live on an **external** _stylesheet_ linked from the _HTML page_ within the ````<head>````, to ensure smoother performance and save a lot of heartache for users and everybody.

#### What _attributes_ are required by image and links for them to be effective and accessible?
>_Attributes_ for images should include a **highly** descriptive text of the image displayed. Should the image be **irrelevant**, the value of the **alt** _attribute_ should be left blank so that screen readers ignore it instead of reading the image file name. Additionally, if an image is highly _irrelevant_, it should be included as a **CSS** background image rather than an ````<img>```` element.
