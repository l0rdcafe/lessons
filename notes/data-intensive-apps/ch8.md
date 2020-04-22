# What are common pitfalls of distributed systems?

Distributed systems are by definition not tied to one machine,
and therefore the potential for faults grows due to its
distributed nature. Some of the common problems that arise
in distributed systems are network failures, clocks and timing issues.
Such problems can cause the systems to be in unexpected states.
Software on a single machine is deterministic meaning that given
the hardware is functioning as expected, it should always produce
the same result. In the case of hardware failure, the result is
often a total system failure, however software on a machine either
works or does not; is deterministic. In a distributed system,
partial failures are non-deterministic as they are completely unpredictable.
By defintion, partial failures imply that the rest of the system
is functioning as expected while only a part of it is not.
In fact, you might not know of the partial failure since the
network routing for the message to travel is also non-deterministic.

# What are the paradigms of large-scale computing systems?

There are two main extremes in large-scale computing systems,
and they are supercomputing; concerning itself with intensive
computations for scientific research. And the other being
cloud computing; concerning itself with multi-units connected
over an Ethernet network in multi-tenant datacenters. In the middle
of the spectrum, lie traditional entreprise datacenters. Each paradigm
handle faults quite differently. Supercomputing systems act like a single
node system in that they do health checks on each node and if a fault exists,
that results in total system failure. It is a fair assumption that something
is always broken in a distributed system, especially as it grows larger.
As a result, to well-designed distributed systems are fault-tolerant meaning
that they still do their jobs in spite of partial failures. In other words,
a good distributed system is a reliable one built from unreliable components.

# What is a shared-nothing system?

A shared-nothing system is the most common type of distributed system.
It can be described as machines connected over the network each with its
private memory and disk resources and has no access to others' except
via calls over the network. Ethernet has no guarantees that packets
will reach their destination and they could be lost for a non-deterministic
number of reasons. A sender does not know whether it will get a response or not
so timeouts become key in fixing the problem of waiting forever for a response.
With that however, a sender still does not know whether their request was
received or not, which could have unexpected consequences. Network faults
due to their inevitability, need to be handled otherwise, the system
could behave in unexpected ways (deadlocks, data deletion, etc...) even
when the network recovers. Handling network errors does not mean tolerating
them but maybe showing an error message. For example, a load balancer would
have to take a node out of rotation when it dies unexpectedly. Another example
network error handling in a single-leader replication distributed database system
would be the promotion of a follower to a leader. This makes rapid feedback
that a node is down paramount, however still unreliable as the node could have
crashed before sending an ack of the receipt of the request. Timeouts indicate
that a node has died but while waiting too long can block performance, prematurely
declaring a node dead can cause other problems as the node might still be alive and/or
in the middle of an operation, that if assigned to a new node could end up being
performed twice. An example of synchronous network communication is a phone call
where an amount of bandwidth is allocated for that call with no queueuing whereas
asynchronous communication is more common in a TCP connection since the size of the
data is variable and it uses bandwitdth opportunistically. When TCP is idle, it
does not use any bandwidth.

# How are unreliable clocks a problem in distributed systems?

Each machine in a distributed system has its own physical clock, which can
be out of sync with others in the same system. This can cause a margin of
error in determining durations of things or exact points in time as data
travel over the network takes time to complete. There are two types of clocks
time-of-day and monotonic clocks. The former is a simple one that can be
synchronized using Network Time Protocol and it refers to current time,
or number of ms since epoch. Time-of-day clocks also ignore leap seconds and
when synchronized with NTP, if one is ahead it can cause jumps thus making it
an unreliable measure of elapsed time. Monotonic clocks provide a better measurement
of time duration as they are guaranteed to always more forward and never jump back.
Absolute monotonic clock values as a result are meaningless. NTP can not edit
a monotonic clock's value but can speed up or slow down its rate of change.
Physical quartz clocks drift in computers so NTP needs to sync time-of-day clocks in a system.
However, that can present its own problems like causing a time jump in the case of
a big clock drift. Processing pauses such as garbage collection can also cause clock
drift and other delay issues. A node in a distributed system must assume that its execution
can be paused at any time and that during the pause, the system works as expected
and maybe declared dead until it recovers and learns from its clock that it was paused.

# How does a leader know it hasn't been declared dead by others nodes in a distributed system?

A leader node obtains a lease that needs to renewed periodically and that acts as a safeguard
to the problem where a leader operates normally while other nodes ignore it and the system
carries on with another leader; split brain. However, since onw node cannot safely judge
the death or leadership status of another, a majority quorum is enforced among all nodes in a system.
A fencing token is insurance that a node never thinks its lock or lease is valid incorrectly.
During a process pause, a lock or a lease could expire but a fencing token is a counter that
increments every time that lease or lock is granted. A node must verify its fencing token
and lock or lease before operating on an object, the node only accepts requests with a
larger fencing token than the last submitted one, thus ignoring stale operations.
The assumption has been that nodes were honest and abided by protocols. But a byzantine fault
is the opposite, and is described as when a node acts out by sending corrupted data.
(i.e bad fencing token) Being byzantine-fault tolerant means the system continues to
function in spite of corrupt or malicious data given to it.
