# What's **DNS**?

**Domain Name System** is a phone book for websites to identify **domains** with their respective physical _IP addresses_. For example, `www.website.com` would have its own _IP address_ of 11.111.11.111.

## What are the different types of **DNS records**?

The five types of **DNS records** are **MX Record**, which directs a **domain's** email to the servers hosting the **domain's** user accounts. A **domain** can have more than one **MX Record** records defined for it with different priorities, which act as sequential fallbacks. Secondly, _TXT Record_ provides text information to sources outside the **domain** used for arbitrary purposes. Its value could either be human or machine readable text, they're used to verify **domain** ownership as well as implementation of email security like _SPF, DKIM, DMARC_. Thirdly, comes the **_CNAME Record_** linking an alias name to another true or canonical name. An example would be `www.website.com` linking to `website.com`. Fourthly, the **A Record** or address record or host record links a **domain** to the physical _IP address_ of the computer hosting that **domain's** services. Lastly, _NS Record_ determines which servers will communicate **DNS** information for a **domain**. Generally, a **domain** has primary and secondary name server records.

### What is a _TTL_ ?

_TTL_ is a value in a **DNS record** given in seconds and defined as the time taken before future changes to the record go into effect. Each of the **domain's** **DNS records** (**MX**, _TXT_, **_CNAME_**, **A**, _NS_) has a _TTL_ value. A setting of 3600 for the _TTL_ is often recommended.

#### What is a _url_?

A _Uniform Resource Locator_ is the web address of a resource on the internet. It's typed into a browser to visit a particular web site.

# What's a **domain name**?

A **domain name** or **domain** is a memorable name associated with a physical _IP address_ on the internet. It's the unique name that appears after @ sign in email addresses, after the www. in web addresses. The usage of **domains** is because names are easier to remember than a sequence of numbers like an _IP address_.

## What's a _subdomain_?

A _subdomain_ is a **domain** that's part of a larger **domain**. For example, mail.website.com, www.website.com, and docs.website.com are all _subdomains_ of the larger **domain** website.com. _Subdomains_ are useful because they're more memorable than _IP addresses_.

## What are the different types of **domains**?

**Naked domain** is a **domain** without the www prefix. _Primary domain_ is the main **domain** purchased from a **_domain registrar_** and hosted on a _domain host_. **_Secondary domains_** are present within a _primary domain_ to integrate services for users from different **domains**.

### What's a **_domain alias_**?

A **_Domain alias_** is a **domain** name that acts an alias for another **domain**. You can add a **domain** as a **_domain alias_** to give another email address at the **_domain alias_**.

#### What's an _IP address_?

An _IP address_ or _Internet Protocol_ address is a series of numbers that identifies the physical location of a particular device on the internet. It looks like this 11.111.11.111.

### What's a **_domain registrar_**?

A **_domain registrar_** is a company that sells **domain names** that aren't owned yet and are available for registration.

#### What's a _domain host_?

_Domain host_ is a company that runs **_DNS servers_** for your **domain** and manages its **DNS records**, meaning they offer server hosting services for your **domain**.

#### What's a _name server_?

A _name server_ is a reference point of your **domain's DNS** data and is typically maintained by a _domain host_ company. It's recommended to have at least two physically separated _name servers_ to eradicate failure in case a server fails.

##### What's the **_WHOIS directory_**?

**_WHOIS directory_** is a public listing of **domain names** and the people and/or organizations associated with each name.
