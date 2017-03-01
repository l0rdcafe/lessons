# What is the Internet, and what are packets?
>The **Internet** is a _network_ of computers,  with unanimous protocols that dictate the manner in which communication is carried out. For transfer of large data, it is broken down into fragments called **packets**, which have instructions and details about their _recipient_ and _sender_. **IP addresses** are assigned to computers (either servers or clients) in a _network_, and can be accessed by a **domain name server** (i.e an address book). **Packets** are transmitted through _routers_, and upon reaching their destination, the **packets'** instructions enable the data fragments to be reassembled to its designated form.

## What is a client computer, server, a web server, a web page, a web browser, a search engine, a website, and a DNS server?

>A client computer is a computer connected indirectly to the **Internet** through an Internet Service Provider (ISP), a web server is directly connected to the **Internet**.

>* A _web page_ is a page displayed on a _web browser_.
* A _website_ is a collection of _web pages_ linked together.
* A computer that hosts a website on the Internet is a _web server_.
* _Websites_ that help you find other _web pages_ is a _search engine_.
* _DNS servers_ are a large address book that help determine which server a _website_ lives on through sending a **DNS request**.

## What's the process of googling something?
>Typing **google.com** into a _browser_ makes the _browser_ check the **DNS cache** for the domain name's **IP address**, and upon identifying it, makes a **request**. If the _web server_ accepts said request, it sends _data packets_ through **routers** to my client computer, which enables the _packets_ to reassemble to display a **copy** of the website. Upon clicking search on **google**, my client computer sends _data packets_ to the _web server_ to make a request to look up _web pages_ including the **search query**. If the request is granted, the _web server_ sends a copy of the _web page with_ the search results as data _packets_ through **routers**, which are then compiled at their destination according to the instructions contained in the _packets_.
