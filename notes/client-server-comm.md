# What is the web and what are **http requests**?

Tim Berners-Lee built the web as a way to make use of the internet, to publish and data. He created HTML, which allows through hyper text for links on HTML pages to reference and link to other pages. He also created **http**, which is the standard protocol for transfer of said data on the web. Essentially, **http** works through a client computer making a request to a server with the unanimous protocol instructions for a certain document. The server then processes the request and responds with a status code. The first line of a **http request** is as follows `GET /pictures/car.jpg HTTP/1.1`. First, the **http method**, then the path to the document and lastly the protocol version. In this case, the request is asking for a document with the specified path using the `HTTP/1.1` protocol. Second, comes metadata about the request such as the browser version, the hostname and the kind of data that the browser supports. The sole mandatory lines of an **http request** are the first line and the hostname, the rest is somewhat optional. A response looks similar, the first line looks like `HTTP/1.1 200 OK`, this response outlines first the protocol used, second the status code of the request, in this case being successful and a response message, confirming that the request was successful. It also has headers, detailing metadata about the server, connection and data type sent back, similarly most of the headers are optional bar the `Content-Length` header to inform the client the quantity of bytes of data it should expect.

## What is a **REST API**?

**REST** stands for representational state transfer and it's a pattern for designing an **API** to deal with **http requests**.

### What is **TCP**?

**TCP** is a protocol that ensures all packages arrive in the correct order, and no lost data between two machines communicating on the internet, it also allows for more than one stream of data between said machines; client and server, which communicate through the **IP**. Those data streams are port numbers, essentially acting as gates for the data streaming from server to client computers and vice versa. **TCP** works by making 2 round trips from client to server in a 3-way handshake. If you're using **https**, an extra layer of security in the form of a **TLS** or transport layer security handshake's performed.

#### What is head of line blocking?

Head of line blocking is a problem that is most obvious with user experience. When the _TTFB_, or time to first byte is too long, the browser blocks further requests until the first request has a response, given that the first request is one that takes a long time until it receives its first byte. To counteract this, browsers open up six other parallel connections to respond to other requests that take have a lower _TTFB_. `HTTP/1.1` further fixed this issue of head of line blocking by introducing a `keep-alive` header that will not close the connection between client and server until it responds.

#### What is **https** used for?

**Https** adds security to an **http** connection by encrypting the sensitive data traded between client and server, with the server able to decrypt the unreadable data stream. A man in the middle attack is when a server intercepts the connection and pretends to be the server the client is connecting to, it decrypts the data then forwards it to the intended server and basically listens in on the data stream. **Https** adds authentication to mediate that potential problem by ensuring that the server has to prove it's the intended server a client is connecting to.

##### What is a **proxy**?

A **proxy** is essentially a _MITM_ or man in the middle, it helps save bandwidth by adding compression, downsamples images and does aggressive caching. When trying to access an **https** website using a **proxy**, the site becomes unreachable since the **proxy** has an invalid certificate.

##### What is **TLS**?

Transport layer security (formerly known as **SSL**) is a handshake that ensures security of data transfer, and is not exclusive to **https**, it's used with _ftps_, which is _ftp_ and **TLS**. **TLS** encrypts the data in a way that no one can except for the recipient. To authenticate the intended server, **TLS** does something called a chain of trust in the form of a certificate that contains metadata about it and a fingerprint of its encryption key. Certificate authorities issue said certificates, and if the fingerprint of a server matches the encryption key then you're talking to the intended server.

###### What is an **SSL error**?

An **SSL error** happens when a server's signature is invalid, is a certificate is self-signed, expired or a different host's, most browsers will disallow access. If no errors happen, the green padlock will appear in the browser signifying a secure **https** connection. _Mixed content_ although not as dangerous but could impact a site's security, by having some dependencies transferred through regular **http** and other data transferred through **https**, this causes a site to get a flag as having _mixed content_. It's thus recommended to serve all data and dependencies through **https** to ensure security.

#### What's new in `HTTP/ 2`?

`HTTP/ 2` handles a larger quantity of requests better than `HTTP/ 1.1`, seeing as the quantity of requests and transfer sizes made for a website are constantly increasing. Thus fixing the `HTTP/ 1.1` problem of head of line blocking due to its limit of six connections to the same server. `HTTP/ 2` uses multiplexing to solve that, and that is using more than one single and combining them into a single one. Meaning you have one connection instead of six, turning it into a stream where frames transfer back and forth. Another problem `HTTP/ 1.1` that `HTTP/ 2` solves is extra unnecessary data due to uncompressed headers, being that most of the header data is redundant, compressing them makes sense and that's what `HTTP/ 2` allows to save on transfer data.

#### What is **XSS** and how does security work?

For security reasons, **JavaScript** is not allowed to access the data of any other origin than its own, an origin consists of three parts, the data scheme (protocol), the hostname and the port. If any of those parts change, then you are on a different origin. This restriction is the same origin policy. **CORS** or cross origin resource sharing is the method to overcome this limitation. **CSRF** or cross site request forgery is when someone intercepts and forges a form that makes a request to a server. **XSS** or cross site scripting is not validating user's input. The name comes from the fact that **JavaScript** injects to another site where it gets executed and has access to that site's data. Validating user input server side is the simplest way to overcome such a problem.
