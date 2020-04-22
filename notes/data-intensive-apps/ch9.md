# What is linearizability?

Linearizability also known as external consistency, immediate consistency, or atomic consistency
is giving the impression that there is only one copy of the data in a replicated database system.
In a system requiring linearizability, if replicas are disconnected then they must wait
until the network problem is fixed or return an error. The CAP theoreom is short for
consistency, availability and partition, when inevitable network partition errors
occur, you have the choice of either consistency (linearizability) or availability
(fault-tolerance). Ordering of operations is important as it helps determine causality.
A system that obeys the ordering imposed by causality is said to be causally consistent.
Snapshot isolation is an example of causal consistency. Total order is when two numbers
are compared while partial order is when two mathemtical sets are incomparable. Causality
defines a partial order not a total order since concurrent events are incomparable,
due to ordered events being linked with causality. Sequences numbers or logical clocks
provide total order for series of events by incrementing a counter on each operation.
However, this approach does not work very well in leaderless or multi-leader systems.
A lamport timestamp solves this by having each node keep a counter of operations and
pair that with its unique node ID. If two nodes with same counter are compared,
the one with the higher node ID is greater in the total order. In single leader
system, the problem of scaling with larger throughput than a leader can handle
and how to handle failovers is called total order broadcast or atomic broadcast.
Partitioned databases only offer ordering guarantees within its partition.
If messages and operations are transmitted, received and performed in the same
order then they can be ensured to be in the same state. This is referred to as
state machine replication. Total order broadcast is also another way to keep
a log of operations. Total order broadcast can also be implemented using
linearizable storage in th form of a linearizable register that stores an integer
that increments, and is attached to each message sent to other nodes.

# What is consensus?

Consensus is when a majority quorum of nodes in a cluster agree on a fact.
Consensus comes into play in leader elections, and atomic commits. Two-phase commit
is an algorithm that solves atomic commits across multiple nodes. Phase one data
is read/written to many nodes in a transaction, then a transaction manager/coordinator
sends a prepare request waiting for acknowledgment from other nodes that they're ready
to commit, after getting positive responses, the coordinator sends out a commit request
to all nodes in phase 2. If the manager receives a single no, the transaction is aborted.
A limitation of two-phase commits is an over-reliance on the transaction manager to commit
or rollback since nodes cannot commit/abort a transaction without confirmation from the
coordinator during the prepare state. As a result, nodes must wait for a coordinator to
recover from a crash to get the next instruction. Three-phase commit evolved out of
the over-reliance on the transaction manager as a nonblocking atomic commit seeing
as two-phase commit is considered a blocking atomic commit. However, it assumes
bounded delays and bounded response times, which are not very practical. 2PC remains
widely used more than 3PC since in practical situations with unbounded delays and
response times, 3PC cannot guarantee atomic commits.

# What is a distributed transaction?

A distributed transaction is a transaction spanning more than one node. There are two types,
database-internal distributed transactions involving nodes within the same database cluster
and database technology. The second type is heterogenous distributed transactions involving
multiple databases from possibly different vendors. Transaction resolutions are important
since if a transaction is in doubt, it locks the targetted rows until the transaction commits
or aborts.
