# What is **PostCSS***?

**PostCSS** is a future-proof kind of _preprocessor_ It allows for a modular approach to writing _CSS_, plenty plugins as well rolling your own custom plugins fixing issues such as `autoprefixer` that were impossible in **SASS**. Lastly, **PostCSS** is much faster than all _CSS preprocessors_ and **SASS** libraries.

## How do **postprocessors** work?

_Preprocessors_ take an input, and processes it to regular _CSS_ from **SASS**, _LESS_ **Stylis**. This process is much slower than a **postprocessor**. They have a parser, which takes an input converting it to a node tree that is then piped through all the plugins, then it converts the node tree back to _CSS_ and outputs it. Said plugins are regular **JavaScript** _functions_.
