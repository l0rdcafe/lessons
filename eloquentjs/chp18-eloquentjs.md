# What are the types of **fields** and what **HTML element** represents them?

**Fields** types in _HTML_ are `text`, `password`, `checkbox`, `radio` and `file`, they are sometimes grouped in a `<form>` tag and use the `<input>` tag with a type attribute specifying its type. For multiline **fields**, a `<textarea>` tag with a closing `</textarea>` applies. Lastly, a `<select>` tag with `<option></option>` child elements encapsulate predefined options.

## What are some _events_ associated with **fields**?

_Focus_ and **blur** _events_ are often found with most `<input>` tags, when a text field's selected, it's focused and when it's deselected, it's blurred. Moreover, an `<input type="text">` element can have an `autofocus` attribute, which focusses the field by default.

### How do you submit a `form`?

A `<button type="submit">` element in a `form`, when clicked submits the `form`. Listening for a `submit` event on the `form` element can help parse the values submitted and validating the form.

#### What events intercept text **field** value changes?

To listen for any key pressed in a text **field**, an `input` event listener applies. A `change` event meanwhile fires when the text **field** value changes after it's out of focus, or blurred.

##### How are _checkboxes_ and **radio buttons** used?

A _checkbox_ has a boolean `checked` attribute, which enables extraction of its value. A **radio button** looks like `<input type="radio" name="sth" value="sthElse">` and they're linked by the `name` attribute making it so that one button can be active at the same time.

#### How are `<select>` **fields** used?

`<select>` **fields** function similarly to _checkboxes_ when the `multiple` attribute applies. It also has its `<option>` child elements nested within it. `<select> <option>1</option> <option>2</option> </select>` They also have size attributes, which return the number of options contained, and has an options property that returns an array-like object of the options available.

##### What's a **file field**?

A **file field** enables the user to upload a file from their disk using the `<input type="file">` element. Its `files` property also returns an array-like object of the attached files, there isn't a `file` property since it also supports the `multiple` attribute enabling attachment of more than one file. Object within the `files` property have properties such as `name`, `size` (in bytes) and `type`. You can read by creating a FileReader object using the constructor `var reader = new FileReader();` and attaching an `load` _event_ to it.

`reader.addEventListener('load', function () { console.log(reader.result); }); reader.readAsText(file);`

### How do you store data client-side?

**Local storage** enables storing data on the client's computer so said data survives page reloads. While _session storage_ functions similarly but the data deletes when the browser session ends (i.e quits). `localStorage.setItem('name', 'john')` stores a string `john` that's referenced by `name`. `localStorage.getItem('name')` returns `john`. Lastly, `localStorage.removeItem('name')` deletes the data.
