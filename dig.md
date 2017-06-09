# What is the `dig` command?

The `dig` is a **DNS** lookup utility, meaning it shows information on a specified **domain**.

## How do you interpret `dig` results?

`dig` command shows information about a **domain** or server. The first line shows the version of `dig` used and the **domain** queried. Next up are the options enabled listed. After that, **DNS packet** details come in human-readable form, showing no query error and its id and more details about the **DNS packet**. The question section shows details about the query sent, in this case the **domain** comes first, followed by the kind of record queried in this case an _A Record_. The answer section follows by identifying the **domain**, then returning its _TTL_ and giving the _IP address_ associated with _A Record_. Lastly, details about the query come showing the time it took for the query, what server the query came from, the time of the query and the size of the **DNS packet**.

### What's the difference between **digging** a website with the www prefix and without, and a custom url vs github.io servers?

The difference between **digging** a **domain** with the www prefix and one without is that the former will show more records, for example **_CNAME Record_** and all _A Records_ and **NS Records**, whereas if you `dig` a **domain** without the www prefix, it will show the physical _IP address_ or the main _A record_ and the main **NS records** in the authority section. Furthermore, the difference between **digging** a custom url versus a github.io server url is the absence of an answer section in the query. Since it's a _subdomain_ of the Github **domain**, whereas l0rdcafe.com is a **domain**.

#### What is the `+trace` option?

The `+trace` option causes `dig` to make iterative queries to resolve the name looked up, starting from the root servers and working its way up the **domain name hierarchy**. `+trace` shows the entire delegation tree and thus gives a full picture of a **domain's DNS records**. Firstly, **_NS Records_** come with a query from the server. Then one of the **_NS Records_** randomly chosen, queried and responds with a list of queries that respond for .com **domains**. `dig` then queries another _name server_, which responds with a list of _name servers_. That _name server_ returns the authoritative response, and the _IP Address_ for the **A Record**.
