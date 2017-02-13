Selectors are the first component of CSS syntax and they designate an HTML element to be styled with a property and subsequently its value. Unless otherwise specified, a targeted HTML element AKA a selector would apply styles to all elements of that type, so depending on what needs to be styled, you should be as specific as possible in order not to apply style rules to unwanted elements. An HTML element can have a class or id attribute, which then can be used as selectors to target elements. Moreover, a specific value of an attribute's data can be targeted, with a * preceding the =. (i.e h1[alt*=post] {color: red;} <h1 alt="post_1"></h1><h1 alt="post3"></h1>)

You can select inside another element by typing its parent element, (ex: <div><img></div>, to target the <img> element: div img {;})

You can target the immediate child of an element by using the :first-of-type pseudo selector, or depending on the situation, :first-child can be used.

You can target a class within a class similar to how you would target child elements, (ex: .class .class2), you can also target a class inside an id or vice-versa in the same way (ex: #id .class). Moreover, if you wanted to target all links in li elements with a class attribute of "bunny" inside the unordered list with the id attribute of "things-that-hop" (Solution: ul#things-that-hop li a.bunny {;})

The three ways to include CSS in your project are either inline styling found in opening tags of HTML elements, or you can find an internal stylesheet usually found in the <head> element on an HTML sheet. Or finally and most efficiently, you can use an external stylesheet, which is linked in the <head> element of the HTML file.

em units should be used in CSS is to scale elements with non-default font size, some of those selectors can be margin, padding, width, height, line-height. They shouldn't be used for font-size however. A rare case of using em units for font size is in a dropdown menu as it uses the default font size as the reference point as to how it'll appear on your browser. rem units on the other hand should be used on layout items as they are not limited by the same constraints as em units. Since em uses the font size of the element itself as its reference to calculating how to display the elements depending on your browser's settings, while rem isn't as constrained, rather rem is calculated depending on the font size of the html element itself. Moreover, em and rem should NOT be used for a multi column layout, and rather % should be used in that case. em units should be used when needing sizing that depends on the element other than the root, while rem units should be used when wanting to scale for the browser font size settings and em unites are unneeded.

A CSS reset is a short, compressed (minified) set of CSS rules that resets the styling to a specific baseline. This was created to avoid the hassle of each browser's default user agent stylesheets and create a benchmark for styling.

The most specific stylesheet's rules will have preference, given that multiple stylesheets with overlapping styles were imported to the same HTML file.

(Problem: <body style="color:yellow"><h1 class="main-title" style="color:green">Howdy!</h1></body> which CSS rule will have preference?) (Solution: color: green), inline styles always have preference over external styles.
