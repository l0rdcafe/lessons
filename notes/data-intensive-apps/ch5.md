# What is replication?

Replication means maintaining redundant copies of data on multiple machines
connected through the network. Reasons for replication include latency reduction,
higher availability and scalability for larger read throughput. Partitioning
(or sharding).

# What are leaders and followers?

Each copy of a database is called a replica. To ensure new data gets written
to all nodes, some solutions have been devised; most commonly leader-based
replication. Leader-based replication is done by assigning one of the replicas
to be the leader, which is responsible for new writes. The rest of the replicas
are in turn followers (read replicas, slaves), that the leader sends the new
data as part of a replication log or change stream. Each follower reads the log
and updates the data in the same order as the log. Clients can read from the leader
or any of the followers but writes are only permitted on the leader. Replication
can either be sync or async. The advantage of sync is the followers always have
an up-to date version of the data, while the disadvantage would be that in case
the follower failed, the leader would block writes until the follower is available.
It is impractical for all followers to be sync so usually one is sync and others are async,
where if a follower fails, an async node becomes sync. This is sometimes called semi-sync.
In the case of async, if leader fails and followers haven't been updated then new writes
are lost. But the advantage is that the leader does not block writes until followers update.
Chain replication is an alternative that aims to minimize data loss, achieve high
availability and good performance. To set up new followers, copying the data would
not work as writes are being performed on the leader. So a snapshot is taken of the leader,
it's then copied to the new follower, then the follower is connected to the leader requesting
the new data since the snapshot, which is marked at a point in the leader's log.
Catch-up recovery is a method for handling node failures where a follower looks
up the last processed transaction and updates accordingly. The most common way
to handle leader failure is failover, which describes the process of electing a new leader
that clients are redirected to send their writes to. In the case of async replication,
and when the former leader restarts, it could have inconsistent writes with the new leader.
Split brain is a faulty scenario when two nodes think they are leaders and therefore,
accept writes potentially causing massive inconsistencies. Replication can be done
on a SQL statement basis or using a write-ahead log by shipping a log to other
nodes to create exact replicas of the byte sequences. Another kind is logical
or row-based log replication and is a log that describes each operation in the database.
Trigger-based replication involves stored procedures and custom application code
to trigger when a transaction happens, this is by far the least efficient approach.

# What are the problems with replication lag?

Replication lag is the time taken for a change to be reflected on a follower from a leader.
Read-scaling architecture is one that employs leader-based replication, it is an approach
only possible with async replication. Data consistency is achieved through eventual
consistency, which describes the event where followers catch up to the leader eventually.
In this case, immediately reading your writes can present a problem if you're reading from
a follower after writing to the leader. Read-after-write consistency guarantees that
the user can read their written data immediately. Another problem with read consistency
is the anomaly where a user reads from a follower with some lag and then reads from another
follower with greater lag simulating a going back in time effect. Monotonic reads is the
guarantee to prevent this read inconsistency. Consistent prefix reads eliminate the anomaly
where a user can read the data in an unordered sequence by ensuring that users read writes
in the order they were created in.

# What is multi-leader replication?

Multi-leader replication increases write throughput by having all nodes be leaders,
consistency is similarly achieved but through each leader following all other nodes.
Multi-leader replication is useful for a multi-datacenter operation by reducing latency
to write to local datacenter, tolerating datacenter outages, and network problems.
Write conflicts are the biggest problem with multi-leader replication. Conflicts
can arise asynchronously after both conflicting writes have been successful, thus
conflict detection forces writes to be synchronous thus detecting conflicts as
they happen. However, that approach essentially nullifies the benefit of
multi-leader replication. Conflict avoidance is a better approach and it entails
that all writes for a particular go through the same leader. In the event of a
datacenter outage, conflict avoidance breaks down as a possibility of concurrent
writes on different leaders occurs. In multi-leader systems, there is no clear
order of writes. Converging towards a consistent state is done by all replicas
arriving at the same state after replication. Convergence can be achieved by
either giving unique ID's to each write and the highest one wins or a timestamp
where the last write wins. This is quite prone to data loss. Giving unique ID's
to each replica and having higher ID's take precedence but this approach is also
prone to data loss. A conflict is when two concurrent writes take place and
have different values. Replication topology refers to the paths the data takes
in propagating writes among nodes. In a two-leader system, there's only one
topology where leader 1 follows leader 2 and vice versa. With more than two,
you can have circular, star and all-to-all topology. All-to-all is the most
prevalent replication topology. In star and circular topologies, infinite loops
are avoided by having each write tagged with a node's unique ID by the latest
node to reflect the write. Star and circular topologies can interrupt the flow
of replication if a node fails while all-to-all can have network congestion problems
or replications overtaking one another.

# What is leaderless replication?

Leadersless replication is a system where all nodes accept writes. There are
implementations where the client directly sends writes to nodes and others
where a coordinating node directs writes. If a node goes down, writes happen
in its absence, then it comes back up and a client reads from it, they might
get outdated data. This can be fixed by sending read requests to multiple nodes
at once and then returning the latest data. This is called read repair. Anti-entropy
process refers to a background process that fills gaps in data to make it more consistent.
Quorums for reads and writes entail that to tolerate failure this expression w + r > n
must be satisfied where n is the number of nodes, w is the number of writable nodes
and r is readable nodes. Sloppy quorums cause writes to be on different nodes than reads.
Quorums guarantee reading of the latest values given that at least one overlap of read/write
for a node occurs. A sloppy quorum is acceptance of writes although the quorum condition
is not met on nodes that are not where the value usually lives. Hinted handoff is
when the writes are passed onto the node where the value usually lives when it comes
back online. Sloppy quorums are useful to increase write availability.
