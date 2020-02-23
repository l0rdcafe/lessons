# What are the formats for encoding data?

Server-side updates can be shipped by a rolling upgrade (or staged rollout)
by incrementally releasing it. Backward compatibility refers to newer code
being able to read data written by older code while forward compatibility
refers to older code being able to read data written by newer code. Data
in memory is formatted using objects, structs, lists, arrays, hash tables,
trees and so on, these structures are optimized for access and are manipulated
by the CPU through pointers. Data on disk or sent over the network is encoded
as self-contained sequence of bytes like JSON since pointers are not portable.
The translation from an in-memory representation to a byte sequence is called encoding,
also called serialization. The reverse is deserialization or parsing. Language-specific
encoding formats offer many problems like coupling to the language, instantiation
of arbitrary classes to decode the data causing security issues. Instead JSON, XML
and Binary variants are better standards for data encoding. JSON has no support for
binary strings, while BSON and other newer formats are extended to support them.
Schema evolution refers to schemas changing over time.

# What are the modes of dataflow?

There are three ways for data to flow, databases, service calls or
asynchronous message passing. Backward and forward compatibility are
necessary since previously written data needs to be read in the future.
Data can flow through REST and RPC services over the network. While REST
is based on HTTP and simple data structures, SOAP is a protocol based on XML.
Remote Procedure Call is a model that tries to make a request to a remote
network look like a function call, which presents many problems. Network
requests are less predictable than function calls. Network requests can timeout
or packets can be lost. RPC requests are not idempotent since it can be retried
while the function was called leading to inconsistent state being maintained.
RPC is less applicable in the public internet and instead in internal systems
for service discovery usually within the same datacenter. To ensure evolvability,
RPC clients and servers should be able to evolve and deploy independently.
Backward compatibility is needed on requests while forward compatibility is needed
on responses. Message-passing systems using brokers or queues are somewhere in between
RPC and database dataflows. Queues can act as buffers if recipient is overloaded,
it can redeliver messages automatically, avoids sender knowing location of recipient,
allows broadcasting of messages and logically decouples sender and recipient.
A queue provides one-way dataflow but a consumer can respond with its own messages on the queue.
The actor model is a model for concurrency in a single process, where logic is
encapsulated in actors and each actor represents an entity or client.
This model is used to scale an application in distributed actor frameworks.
