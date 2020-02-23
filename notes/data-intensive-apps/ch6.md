# What is partitioning?

Partitioning or sharding is the breaking up of data when it grows too large.
It allows for higher scalability distributing the query load across many
processors. Partitions are usually replicated across many nodes in very
similar fashion to nodes. Partitioning aims to spread query load evenly
across nodes. Skewed partitioning is when some partitions have more data
or queries than others. A partition with an outlier query load is a hot spot.
Partitioning by key range is a popular approach or even hash of the key.
Depending on the key, key range partitioning can cause hot spots (i.e key is date)
By using a key hash, range queries are lost as a benefit of key rang partitioning.

# What is partitioning by secondary indexes?

There are two kinds of partitioning by secondary indexes and they are
document-based and term-based. A local index is a document-partitioned index
since it allows update and read of a record from the same partition.
Scatter/gather is the approach of querying many partitions to get
all records partitioned by a secondary index. A global index is scoped
across all partitions in term-based partitioning. This makes reads more
efficient by mitigating scatter/gather while writes are slower and more
complicated since one write may affect many partitions.

# How do you rebalance partitions?

Rebalancing is the process of moving load from one node to another.
While rebalancing partitions, database should accept reads/writes.
Load should be distributed evenly after rebalancing partitions.
Rebalancing can be done by fixing a number of partitions per node
then whenever a new node is provisioned, the existing partitions
can be divided among the nodes. Dynamic partitioning uses a variable
amount of partitions depending on the data volume.

# What is request routing?

Request routing is the process of directing client operations to
the appropriate node for it. Round-robin algorithm is the most
common routing approach. Or send all clients to a routing tier
acting as a partition-aware load balancer. Or the client needs to be
aware of the partition they intend on connecting to.
