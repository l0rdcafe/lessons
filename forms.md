# Why are **forms** one of the most important parts of a _website_?

**Forms** are one of the most important parts of a _website_ because it captures information from users, sends a _request_ to the **back-end** for further _data processing_.

## How do you construct a basic **form**?

You can construct a basic **form** using the `<form>` _tags_ to enclose one or more `<input>` _elements_, and those `<input>` _elements_ may have a range of different applications from typing in an _e-mail_, to a _password input box_, to a **search box**, among other functions. Often at the end of a **form**, a _submit button_ exists through an `<input>` _element_ by specifying its type. `<input>` _elements_ are self-contained meaning that they _don't_ need to wrap around other content and uses one _tag_ to define it.

### How can you specify the _path_ which the **form** submits?

You can specify the _URL/path_ to which the **form** submits using the **action attribute** in the _opening tag_ of a `<form>` _element_. The value of the **action attribute** must be equal to the _destination URL_ to which the submitted **form** submits.

`<form action="dotcom.com">`

# What are all the possible **form** _element_ types?

A `<form>` _element_ has a family of _child elements_, primarily `<input>` is the most important and defines a field for _text_, _e-mail_, _radio button_, _checkbox_, a _phone number_, _date_, _time_, _url_, those are most visually obvious on mobile phones and are often assigned as values for the **type attribute** of an `<input>` _element_. `<textarea>` is another _element_ that defines a **text box** within the **form**. `<textarea>` _element_ isn't **self-closing** unlike `<input>` _elements_, meaning they could wrap around **content** to display within them, and they require both _opening_ and _closing tags_.

A `<select>` _element_ also requires **both** _tags_ and encloses its child `<option>` _elements_. Each `<option>` _element_ must have a **value attribute** with a specific **value**, they also require _both tags_. A `<select>` _element_ can have more than one **Boolean attribute** to define selectable options. You can also hide `<input>` _elements_ by typing in a _value_ of **hidden** in its _type attribute_, or a _button_ by using **submit** as its _type attribute_ **value**, or lastly, use the **file value** as its _type_ to define that the user should _upload_ a certain **file**.

Within a `<form>` you find the `<label>` _element_ which also isn't **self-closing**. It's displayed **inline** and wraps its _content_ and often precedes whichever `<input>` it's supposed to label. A `<fieldset>` _element_ groups the **form** as a **block element** like a `<section>` or `<div>` element, it _isn't_ **self-closing** either and precedes `<label>` _elements_. Moreover a `<legend>` _element_ wraps its _content_ and lives right after the `<fieldset>` _element_ and before the `<label>` _element_. It defines a _heading_ or a _caption_ for the **form**.

A `<button>` _element_ can also exist within a `<form>` to define a **submit button**. In _HTML5_, a new `<output>` _element_ that **outputs** a result of a calculation is usable.

## When should you use **'GET'** vs _'POST'_ values for **method attribute**?

Within the opening `<form>` _tag_, a **method attribute** exists and can have one of two values, either **'GET'** or _'POST'_. _POST_ **value** should deals with _sensitive information_ or submissions as the _requests_ **aren't cached** as opposed to **GET**, which **caches** _requests_. Meaning that **GET** _method_ shows the submitted information in the **URL**, making it accessible whilst the _POST_ method is **secure** and subsequently **doesn't**.

### When should you use **checkboxes** instead of _radio buttons_?

When you want to select plural options, then **checkboxes** should are more pertinent instead of _radio buttons_ as they allow for more than one selection.

#### When should you use a **dropdown** instead of a _text field_?

A **dropdown menu** is usable when there are _too many_ options for _radio buttons_ or **checkboxes**, they're used to give the user a better _overview_ of the possible selections instead of scanning through a large number of _radio buttons_ or **checkboxes**.

##### How can you create a large **text field**?

To create a large **text field**, you would add the _rows_ and _cols_ **attributes** within the opening `<textarea>` _tag_ with whichever numerical _values_ desired to make the **text field** as big as needed.

#### How do you link _elements_ with their **labels**?

_Elements_ can link with **labels** by nesting them within a `<label>` _element_, which defines the name or label of a `<form>` _element_, they're then linked to the their respective `<form>` _elements_ through adding a _'for'_ **attribute** within the opening `<label>` _tag_ with a **value** matching the **ID value** for its linked _element_. The _'for'_ **attribute** _must_ match the **ID value** _not_ the **name attribute** for them to link, the **name attribute** pertains to **back-end** purposes and for the `<form>` _element_ to be recognizable when submitted.

##### How do you link check boxes (_element selections_) so they're nicely formatted when they're submitted?

By having a _common_ **value** for the **name attribute** of _element selections_, they are then linked and thus nicely formatted when they're submitted to the _server_.

###### What should a **submit** _button_ say instead of 'submit'?

A **submit** _button_ should probably say _send_, **next**, **_finish_** instead of 'submit'. It depends on the context of the **form**.
