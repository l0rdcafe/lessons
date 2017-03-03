# What is the **DOM**?

The **DOM** also known as the **document object model** is a _cross-platform_ and _language-independent_ **application programming interface** (_API_) treating **ML (_Markup Languages_)** as a free structure where each _node_ or _element_ is a part of the **document**.

## How do _elements_ get placed in the **DOM** by default?

_Elements_ in the **DOM** are in a **tree form**, with each _element_ having relationships with others depending if they're siblings or _parent/child_ relationship.

### How can you override _element_ **positioning** using the '_position_' **attribute**?

By setting its _value_ to _'relative'_, the **position attribute** would override _element_ **positioning**.

#### When can you use the **top**, _left_, _right_, **bottom** **attributes**?

The **top**, _left_, _right_, **bottom attributes** apply when the **position property's** _value_ isn't _'static'_, with each having their own positioning effect.

## What is the difference between _float_ and **position**?

_Float_ moves a **block** of content to either _right_ or _left_ sides of the **page**. While **position** has more _values_ ranging from the default _'static'_ to the _relative_ to its parent element _'relative'_, or _'fixed'_ which is relative to the viewport or **browser** window. _Floated elements_ have a flow of their own in some way, in that they interact together, for example if you _float_ two elements _left_, they would line up next to each other. Whilst with **position** elements won't unless a certain specific _value_ applies.

### Which _element_ acts as the parent for the **floated element**?

Its parent _element_ is irrelevant to a **floated element** unless it's also **floated**. This could cause its parent _element_ to **collapse** unless a _fix_ applies after. Meaning that the parent _element_ won't resize to fit its **floated child element**.

#### What's the difference between **floating** _right_ and **floating** _left_?

**Floating** _left_ floats the content to the left of the page and takes it out of the **normal flow**, while **floating** _right_ does the same but to the right of the page.

##### What happens when you make the **browser** narrower with **floated elements** next to each other?

Making the **browser** narrower would keep the **floats** as they are because they interact differently than other **non-floated** _elements_ do.

### What's the practical difference between _relative_ and **absolute** positioning?

**Absolute** positioning offers the use of the **top**, _right_, _left_, and **bottom** properties and an _element's_ position is in reference to the document itself. Given the following _values_ div {top: 0; right: 0;} would be at the _top right_ corner of the **page** irrespective of its parent _element_ ripping it out of the **document flow**. Moreover, _relative_ positioning also offers similar adjustable **properties**, though it interacts with other _elements_ in the **normal flow** in that it doesn't disrupt the order of _elements_, meaning that the _element_ with _relative_ positioning would move in reference to its position in the **normal flow**.

#### Which _element_ acts as the _parent_ for either an **absolute** or _relative_ element?

An **absolute** positioned _element_ would be in relation to its first parent _element_ that doesn't have a set position or has a _value_ of _'static'_, subsequently positioning the _element_ in reference to the _HTML document_. Otherwise, if its _parent element's_ position is either **absolute** or _relative_, then that **absolute** _child element_ is in relation to its _parent element_ within it. A parent _element_ restricts its child _relatively_ positioned _element_ if its position is either **absolute** or _relative_.

### How would you set up a grid of 20x20 boxes on the page using **floats**? Using _lists_?

To create a grid of boxes using **floats**, you would start by creating a div for the squares of _content_ and create a div within each square with the _content_ itself. You'd **float** the _.square_ divs _left_ with a _relative_ position, _% value_ for both **padding-bottom**, **_margin_** and _width_ with the _overflow_ **hidden**. Moreover, the _content_ would be **absolute** positioned and would also have _% values_ for **padding**, _width_ and **height**. Check [this](http://stackoverflow.com/questions/20456694/grid-of-responsive-squares) out. You could set a grid up using _lists_ by setting the **CSS** properties of **margin** to _'0 auto'_ and **text-align** to _'center'_ for the _parent list element_ (**ul**, **ol**, **dl**), for the _list lines_, you would set their **display** _value_ to _'inline-block'_ and **vertical-align** _value_ to _'top'_. [This](http://stackoverflow.com/questions/14885026/how-to-lay-out-list-items-like-a-grid-with-css-and-html) is awesomely helpful.

#### What are **negative margins** useful for?

**Negative margins** are useful to position and push around _'static' elements_ around a page, they also affect a box's size for an _element_ depending on the specified _value_.
