# What are _semantic tags_ and how are there more of them in **HTML5**?

_Semantic tags_ define meaning or how the **content** should appear on a _page_. **HTML5** introduced new _semantic tags_ to define the meaning and how the **content** looks. The new _tags_ are `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>`.

## What does the `<canvas>` element do for you, and why is it incredible?

One of the new _tags_ in **HTML5** is the `<canvas>` _tag_, which is a section or rather a _rectangle_ on the page in which you can use **_JavaScript_** to draw anything from _graphics_, to **game graphics** to other **_interactive designs_**. `<canvas>` is infinitely incredible because it opens up a whole can of **interactivity** in the middle of your webpage.

## What are the new **video** controls?

The new **video** control features through the new `<video>` _tag_ circumvent the cumbersome former necessity of a **third-party involvement** (i.e _QuickTime_ or _Flash player_) and uses controls from the _browser_ itself to control _playback_, **_volume_** and a **timecode**, as well as a _seeker_. The controls even work on mobile _phone browsers_ should they support **HTML5**, as for _browsers_ that **don't**, they ignore the `<video>` _tag_ altogether. You can add a **caption file** with .vtt extension with a `<track>` _tag_ nested in the `<video>` _element_, sometimes after the 'src attribute(s)''s definition. More _attributes_ include **preload** which downloads the **video** when the page _loads_ **without** playing it, while preload="none" does **not** download the **video** when the _page_ loads.

## What's **local storage** and how is it used?

**Local storage** is an **HTML5** storage concept that gives _web sites_ the ability to store _data_ on your computer for later retrieval, theoretically it's akin to _cookies_, but practically, the _data_ is much larger in quantity. Whereas cookies are small and _limited_ in size, and sent by the _browser_ back to the **server** with each _page request_, **HTML5 storage** lives on your computer and _web sites_ can access it with **_JavaScript_** after loading the _page_.

### What are the new **audio** controls?

`<audio>` is a new media _element_ in **HTML5**, it uses a _browser's default controls_ like a`<video>` _tag's controls_. Like `<video>`, it can has plural attributes, some of which are **autoplay** (_plays upon the page loading without showing the controls_), **controls** (_which shows a seeker, timecode, a play/pause button and volume control_), and the **loop** attribute which loops the _content_ when the _page loads_. Moreover, **height** and _width_ are specifiable for either `<video>` or `<audio>` _elements_.

## What are **data attributes** and how are they used?

**Data attributes** store _private data_ specific to a _page_ or _application_. Like _classes_ or **ID's**, exist in the _opening tags_ of _elements_ and their **syntax** is as follows: (i.e data-birds="hummingbird") the "birds" defines the **attribute name** and is always prefixed by 'date-', its **attribute value** follows the name after an = sign. **Data attributes** are transferrable from **back-end** to _front-end_ through using the **data name** not the _value_.

### What are the _compatibility_ and **performance** trade-offs with **HTML5**?

With the advent of **HTML5**, arose _compatibility_ and **performance** trade-offs. Some older as well as current versions of _browsers_ don't support some of the new features, _elements_ or _tags_ in _HTML5_. A **browser** would ignore the _tags_ or _elements_ in question when displaying a **page**. Moreover, **performance** could be adversely affected in that the features won't properly render or won't play as they are. With the new `<audio>` and `<video>` _tags_ arose the problem of _format compatibility_ with different **browsers**, this is avoidable through linking **all** formats of **video** and _audio_ in the code for the **page** to effectively load the media as it's intended.
