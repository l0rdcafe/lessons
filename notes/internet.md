# What is a network?

A network is an arrangement where there's a connection between more than one computer and data can be sent from any system on the network to any other, a network's owner controls it and can be a person or organization. In a network, a computer is often named a host.

## What is an internet?

An internet is a network of networks connected by routers. A router is computer that acts as a connection point between two networks and data passes through routers from network to the other.

### How do all networks on the internet connect to each other?

Networks on the internet connect to each other using a standard protocol called the IP, which stands for Internet Protocol. Data travels in packets in the IP and each host and router has a unique 32-bit address. The cable coming out of the wall runs into a modem, which is a device immediately connected to the ISP's network. When connected, the modem gets a unique IP address.

#### What are client and server computers?

A server is a program that primarily listens on the network for incoming requests from other programs then responds to those requests. A client is a program that makes requests to servers.

##### How does email work?

Email is different from the web in that it does not use HTTP but different protocols like SMTP, which stands for Simple Mail Transfer Protocol, POP; Post Office Protocol, IMAP; Internet Message Access Protocol. Sending an email goes through an email server that is responsible for sending messages to the intended recipient as well as storing received messages. While the client email is the program that the user interacts to send emails. Instead of using an email client like Microsoft Outlook, webmail like Gmail is more popular.

### What is a peer program?

A peer program behaves like both server and client programs, peers listen to requests and make network requests as well.

#### What is NAT?

Network Address Translation is a trick that allows more than one device to share one IP address but it is not an ideal solution. A better solution would be a new version of the Internet Protocol IPv6, which uses 128-bit addresses allowing for many more IP addresses than IPv4's 32-bit addresses.

### What are the internals of the IP?

The link layer of the IP refers to the workings of each individual network. Ethernet is a common standard for the link layer. In an Ethernet network, each device has a unique MAC address, which stands for Media Access Control and each device on the network can send Ethernet packets to any other. Packets include a header and footer describing the packet itself similar to HTTP headers like source and destination MAC addresses of the packet. Each IP packet contains a header describing the packet like the source and destination IP addresses in addition to the IP data. The transport layer provides two choices of protocol TCP and UDP, both include source and destination port numbers, which specify the program on the sending host that sent the packet and which program on the receiving host receives it. TCP provides reliability while UDP does not. TCP stands for Transmission Control Protocol, while UDP stands for User Datagram Protocol. IP is unreliable and thus TCP keeps track of packets and when they reach their destination, as well automatically resending any chunks that did not reach their destination. UDP does not provide such a mechanism like TCP. The application layer refers to the application specific protocols used by the program like HTTP (for the web), SMTP for email. An IP header has its version in 4-bits and its header length in 4-bit 4 bytes and the total packet length, which specifies the size and length of the IP packet. TTL portion of an IP header, short for time to live and it marks each packet with a countdown timer to prevent packets being lost over the network.

### What is a TCP handshake?

Before 2 hosts exchange data over TCP, a 3-way TCP handshake establishes their connection. The client initially sends a segment with no data with a SYN (synchronize) flag set and an initial sequence number. The server responds with its own data-less segment with SYN and ACK (acknowledge) flags set with the ACK set to +1 of the client's random sequence number it receives, and  its own random sequence number. The client responds with ACK that is one greater than the sequence number it receives from the server.

#### What is ICMP?

The Internet Control Message Protocol is a protocol used for messages sent between IP stacks themselves, not between processes.
