# What's the difference between **internal links** and **_external links_**?
>**Internal links** have _relative paths_ leading to a file on the same _site_, with the linked **file** usually present on the same site, sometimes in a **separate** _directory_. Meanwhile **external links** have _absolute paths_ since they **link** to other _sites_, an **external link** would be written like with the "http://" and the "www" prefixes, as well as the **domain** ".com,.io,.ca,etc..." ````<a href="http://www.youtube.com/">...</a>````

>## When should you use an **absolute** versus a _relative_ path?
If the _hyperlink_ links to an **external link**, then an **absolute path** should be used since the document _isn't_ present on the same _site_. However, if the _hyperlink_ links to an **internal link**, then a _relative path_ should be used since the document is on the same _site_.

> ### How can you open **links** in _external windows_?
You can open **links** in _external windows_ by adding the **attribute** (target= "blank) to the opening ````<a>```` _tag_.

> #### How do you navigate the _document tree_ with **links**?
You can navigate the _document tree_ with **links** using the ````<a>```` _tag_ referencing files specified through a _relative path_ on the same _site_, linking to the documents where the pages are.

> ##### What are all the possible **pseudo-states** of _links_?
There are a bunch of **CSS pseudo-selectors**, they range from **:link**, which selects an _unvisited link_ in its initial state, making it susceptible to _styling_. **:visited** _links_ is another **pseudo-selector** enabling the selection of _links_ **after** they've been clicked on or **visited**. **_:hover_** selects _links_ or _elements_ when the cursor hovers over them, _styling_ it in that case. **_:active_** selects a _link_ in the very brief state between clicking the _link_ and it being **:visited**, this state can be prolonged by holding a mouse-click. **:focus** is the state when is focused on, mostly used in **forms**, after clicking on a _link_, or after tabbing to a _link_.
