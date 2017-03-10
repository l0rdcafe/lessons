# How do you set the **background color**?

The fastest way to set an _element's_ **background color** is to use the _'background-color'_ property (or use the shorthand _'background'_ property) and set a hexadecimal or name color for its _value_.

## Which color takes preference when stacked _elements_ on top of one another are on a page (on the z-axis)?

The latest _element_ in _HTML_ will take color precedence when stacked _elements_ on top of each other are on a page. Moreover, if it's a positioned _element_ (meaning it has any _value_ different than _'static'_ for its **position** property) then it'll stack in front of other _elements_. _'z-index'_ works solely on **positioned** _elements_ and any _element_ who has the highest _value_ won't necessarily have **color preference**, according to the **stacking context** created by a _'z-index'_ property.

### How do you set a partially transparent color? (rgba anyone)?

You can make a partially _transparent color_ using the **rgba** _value_ of (white, 0.1)

#### Where are **gradients** most commonly used in "real world" _websites_?

**Gradients** are most commonly used to add professionalism to real world _websites_ as the **background's color**, because it looks cleaner than **solid colors**.

##### How do you set a **gradient background**?

You can create a **gradient background** through using the **linear-gradient** or _radial-gradient_ property. The former by default after defining two **color** _values_ for it (red, blue) will go from blue to red from _top_ to **bottom**. You can further specify **angles**, _px_ and other _values_ within the **linear-gradient** property to alter how its **gradient** behaves.

###### How do you make an _image_ the **background** of an _element_?

You can make an _image_ the **background** of an _element_ through linking the intended _image_ using either the _background_ or **background-image** properties.

### Why is it useful to make the _image_ the **background** of an _element_ instead of using a regular `<img>` _tag_?

It's useful to use a **background** _image_ instead of an `<img>` _tag_ to improve download times, if the _image_ isn't relevant to the content, _semantically_ or otherwise.

#### How do you make a **background image** of a fixed size?

You can fix a **background image's** size using the **background-size** property and applying the appropriate _values_ to size it.

##### How do you make a **background image** _repeat_?

You can make a **background image** _repeat_ using the **background-repeat** property, and setting its _value_ for _repeat_, _no-repeat_, or you can define more than one _value_ for both x and y axes _repeat_.

###### How do you get your page's **background image** to fill the page even when you resize the _browser_?

You can get your **background image** to fill the page regardless of a _browser's_ size by setting its _width value_ to _100%_, its **position** to _absolute_, and subsequently its **top** to _0_, and _left_ to **0**.
