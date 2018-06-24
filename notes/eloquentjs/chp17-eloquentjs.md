# What is the **`http` protocol** and why is it important?

**`http` protocol** is the mechanism through which data travels on the world wide web. When you type a url in a browser and it stands for **HyperText Transfer Protocol**. One of the most common **request** _methods_ is a **`GET` request**, which tries to open a _TCP_ connection on port 80, the default port for `http` traffic. A **`GET` request** sends from the client computer this:

`GET /17_http.html HTTP 1/.1` `Host: longwebsitename2000.com` `User-Agent: [browser name]`

`GET` signifies the _method_ in which the data travels, in this case the client side makes a `GET` **request** to fetch a document or whatever the resource path leads to. After the _method_, the path of the resource comes next in this case `/17_http.html`, then comes the version of `http` **protocol** used in this **request**. Then, the **hostname** comes, and is essential because a server might be serving more than one hostname on a single **IP address**. And lastly, the _user agent_ comes signifying the kind of _browser user-agent_ used to send the `http` **request**.

The server side responds with the following:

`HTTP 1/.1 200 OK` `Content-Length: 65585` `Content-Type: text/html` `Last-Modified: Sun, 14 Apr 2016 11:21:27 GMT`

Initially, it responds with the version of `http` **protocol** used, then the **request's** status, `200` signifies success, whereas anything over `200` signifies an error, `404` being that the resource isn't found, then follows the human readable status saying `OK`. The length of the resource follows in _bytes_, then the content type, which could be `text/plain`, `text/html` or `application/json` or others less common types. Both **requests** and _responses_ can have a body after a blank line succeeding the headers that contains the data sent. In the case of `GET` and `DELETE` **requests**, neither send data while `PUT` and `POST` do.

## How do `http` and the _browser_ interact, and what kind of **requests** can you make?

On the client side you can make a lot of kinds of **requests**, each with a different _method_. A `GET` **request** is the most common and fetches data from a _server_, other methods include `DELETE`, which removes a resource, `PUT` to replace a resource and `POST` to send data to a server. When a form or a browser element submits values in a `GET` **request** through a form for example, the encoded string values are in the resource path of the **request**. Some characters such as ? use different encoding in the path. When there are no side effects and the task is solely to fetch data, a `GET` **request** is better, but if a **request** changes something on the server, a `POST` _method_ is a better fit.

### What is and how do you use the `XMLHttpRequest` **API**?

The `XMLHttpRequest` is an **API** built by Microsoft in the days when `XML` was a popular file format. Although `XML` and `http` have nothing to do with another, the **API** still had that name. But it isn't without good reason, since the **API** allows you to parse response documents as `XML`. The simplest way to make a **request** is as follows.

`var req = new XMLHttpRequest();` `req.open('GET', 'example/data.txt', false);` `req.send(null);` `console.log(req.responseText);`

A URL that doesn't start with the `http://` prefix, the **API** interprets it to be relative to the current page, meaning that the current path is in front of the URL. Moreover, you can read headers from a **request**, or even sometimes set them using the `getResponseHeader()` and `setResponserHeader()` _methods_ of an `XMLHttpRequest` **object**. In the call to open, the last argument is `false`, this makes the **request** synchronous.

#### How do you make **asynchronous requests**?

As noted before, the third argument in an `http` **request's** `open()` call is a _boolean_, if it's `false`, then the **request** made is synchronous. But should said _boolean_ be `true`, then the **request** will be asynchronous. Making a **request** asynchronous enables the rest of the program to run by scheduling the **request** in the _callback queue_ as opposed to it being synchronous, which would freeze the program until the server **request** resolves. A `load` event would enable us to listen for the **request** loading, by adding: `req.addEventListener('load', function () { console.log('Done: ' + req.responseText); });`

##### How does the **`https` protocol** keep data secure?

`https` **protocol** stands for secure `http` and its job is to keep important data safe and secret. The client verifies the server by requiring the server to prove it has a cryptographic certificate issued by a certificate authority, next the data traveling over the connection becomes encrypted preventing eavesdropping and tampering.
