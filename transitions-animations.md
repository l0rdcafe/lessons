# What is **transition** and what are its properties?

A **transition** occurs when a state change happens, either `:hover`, `:active`, `:focus` and `:target`. It has four properties and they are `transition-property`, which specifies what property of the element is going to **transition** when its state changes. `transition-duration` follows and defines the length of the **transition**. It takes both **s** and _ms_ (seconds and millisecond) _values_. `transition-timing-function` sets how the **transition** carries out. It can have a lot of _values_ such as `linear`, `ease-in`, `ease-out`, etc...a property can also have more than one _value_ separated by a comma, which apply to the `transition-property` _values_ in the same order. Lastly, `transition-delay` defines if the **transition** delays or not. Some properties that can't transition, and they're [here][1].

## What are **animations**?

Unlike _transitions_, **animations** offer more control over the movement of the visual interaction, as it doesn't require state changes, instead they use _keyframes_ allowing for more control on different **breakpoints** within the **animation** itself. Like _transitions_, **animations** have the following properties with the same effects `animation-duration`, `animation-timing-function`, `animation-delay`.

### What are _keyframes_ and how do they control **animations**?

_Keyframes_ are specific points in an **animation**, when declared they have the `animation-name` next to it, and then specifies specific **breakpoints** or points within the **animation** where some styles apply, **breakpoints** are often percentages but they can also be `from` and `to` to replace `0%` and `100%` respectively.

#### How can you customize **animations**?

You can customize **animations** using the following properties, `animation-iteration-count`, which either takes a numeric _value_ or `infinite` defining the times the **animation** plays. `animation-direction` takes any of these _values_ `alternate`, `normal`, `reverse`, `alternate-reverse` and they serve to determine the **animation's** direction. `animation-play-state` takes one of two _values_ `running` and `paused` and gives control over the **animation's** play state in a separate state change. Lastly, `animation-fill-mode` takes one of four _values_, any of `none`, `forwards`, `backwards` or `both`, `forwards` applies styles in the last **keyframe** or keeps the styles after the **animation**. While `backwards` implements the original styles before the **animation** starts, while `both` applies both and `none` is self-explanatory.

[1]: http://learn.shayhowe.com/advanced-html-css/transitions-animations/
