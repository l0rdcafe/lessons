# What is **Node.js**?

**Node.js** is a program that allows you to run JavaScript outside of the browser, often used for command line tools and dynamic _HTTP servers_. **Node** facilitates _asynchronous_ operations but also supports **synchronous** tasks.

## What is the `process` variable?

The `process` variable is a global variable in **Node** outlining details of the program. It has an `exit` _method_, which could have a status code as an argument.

### What are **node modules**?

**Node modules** are a system built in **node** that helps with importing external **modules** into a program. Calling `require` imports the **CommonJS module**, enabling importing, `fs` is another **node module** that enables file reading. A `require` takes a relative path as it argument, where `.js` is optional. `./` stands for current directory, `../` stands for one directory up and writing `require('fs')` would look for the **module** in the `node_modules` directory or assume it's built into **node**. The `npm` library helps install **node modules** and extensions.

#### What are the `http` and `fs` **modules**?

As mentioned before the `fs` module stands for file system, and has methods such as `readFile`, which reads a file _asynchronously_ and `readFileSync`, which reads a file **synchronously**. The `http` **module** provides functionality for running `http` servers and making `http` requests. It takes a _function_ as its argument, and its response has a `writeHead` **method**, which specifies headers as well as a `write` **method**, which writes to files. The `response` argument also has a `response.end()` **method**, which signals the end of _data_ transfer and lastly the `var server = require('http')` has a `createServer` **method** and a `server.listen(8000)` **method**, which takes a port number as its argument in this case `8000`. For secure requests, **node** provides an `https` **module**.

##### What are **streams**?

The `fs` **module** has a `fs.createWriteStream` **method**, which points to a file and allows for the `fs.write` **method** on the resulting object to write the file one piece at a time rather than in one shot as with `fs.writeFile`. Like `addEventListener`, streams have an `on` listener that can listen to `'data'` and `'events'`, which fire every time data comes in and when the stream ends respectively.
