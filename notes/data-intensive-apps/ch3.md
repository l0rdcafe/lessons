# What are the underlying data structures in databases?

A log is an append-only mechanism for writes to a file used in databases.
Real databases have problems like concurrency control, reclaiming disk
space so logs don't grow forever and others to contend with. An index
data structure increases read efficiency in a database by reducing
time complexity. An index is a collection of metadata to help point
reads to the data quickly. Their cost is slower writes as indexes
have to be updated after each write. Hash indexes are a kind of index
implementing key-value pair store (similar to dictionary type), keeping
an in-memory hash map mapping memory locations to data is an approach
producing a hash index. In order to avoid running out of disk space,
segmenting the log into certain file sizes and writing extra data
to new segment files. Compaction can be performed on segments by
throwing away duplicate keys in the log and keeping only the latest
update for each key. Segments can be merged in compaction and they are
never modified after being written. After compaction and merging, each
segment has its own hash table. File format, usually binary format is
more efficient than CSV for a log. Deleting records from an index
requires appending a deletion record to the data file (AKA a tombstone),
when log segments are merged, the deletion record allows the discarding
of all previous values for the deleted key. Crash recovery through storing
snapshots of hash tables on disk in case a database is restarted, which causes
loss of in-memory hash maps. Partially written records in case of a database
crash are corrupted and thus easily detected and removed upon recovery.
Concurrency control allows concurrent reads with multiple threads since segment
files are immutable, while writes are allocated one thread only. Hash table index
limitations include memory constraints, and range queries are rendered inefficient
since all keys have to be looked at. SSTables and LSM Trees are another data structure
to store indexes in a database. A Sorted String Table sorts a key-value index
by key in a segment file and ensures a key is unique per segment file, this is
achievable during the compaction process and mergesort algorithm. Sorting segment
files minimizes the size of the hash tables stored in memory. Databases during
writes use a memtable as sort of a buffer to store the data in an in-memory
balanced tree before writing to SSTable files when the data gets to a certain size.
An unsorted log is kept documenting each write regardless since in-memory data
will be lost on crash. Log-structured Merge tree is the name given to this process
of sorting segment files and having backup logs. It describes keeping a cascade of
SSTables getting merged in the background. B-trees are the most common data structure
for indexes. B-trees keep key-value pairs sorted by key like SSTables. Instead of segments,
B-trees break the database into fixed size blocks or pages traditionally 4 KB in size.
They read or write one block at a time and each block can be identified using an address,
allowing blocks to point to each other. There's a root block on a b-tree, which is the default
starting point for reads. The branching factor is the number of references to other blocks
in a block of a b-tree. Updates on b-trees are simple but writes are less efficient since
the range ofor the key to be written needs to be scanned first to ensure that the b-tree
is balanced. In the case of a crash during a bulk update, orphan records could occur
as a result of a corrupted index. To alleviate that, b-tree indexes implement WAL
(write-ahead log or redo log), an append-only file where every b-tree modification is written
and is used to restore the b-tree to a consistent state upon crash recovery. Careful
concurrency control is also a consideration in the case of bulk updates. Latches or lightweight
locks are implemented to ensure each the b-tree state is consistent across threads. LSM trees
are efficient for writes while b-trees are efficient for reads. LSM trees can be compressed
more easily tha b-trees thus producing smaller files on disk. LSM trees can sustain
higher write throughput because sometimes they have lower write amplification. Write amplification
refers to a write to the database causing many writes across its lifetime. Merging and compaction
can affect the performance of writes and reads in LSM trees. B-trees store only one copy of
a key as opposed to LSM trees, which stores many copies of the same key. A heap file stores
the place where rows are stored, it avoids duplication of data where indexes point to a
location in the heap file where the data is. A clustered index stores the row within
the index itself. When an in-memory database is restarted, its state is restored from
a backup on disk. In-memory databases offer data structures that are more difficult
to implement with disk-based indexes. Anti-caching allows data larger than memory
to be stored in an in-memory database by freeing the least recently used data
from memory to disk then loading it back when it is read.

# What are the main uses of databases?

Database writes are commonly associated with commercial transactions but more recently,
analytics have come into play. A transaction is a unit consisting of a group of database
reads and writes. The access pattern for business transactions where a user causes
a write or update to a small set of records is referred to as online transaction processing.
Data analytics have a different access pattern where a small set of columns are read from a large
number of records that are then aggregated in some way to produce meaningful data.
This access pattern is called online analytic processing. Data warehousing refers to
a separate database dedicated for business analytics. ETL (extract-transform-load) is
the process of assembling data into a data warehouse. Star schema (AKA dimensional modeling)
is the most widely used data model implemented in data warehouses. Fact tables are at the
center of a star schema, where every row represents an event that occurred at a certain time.
Fact table columns are attributes (cost, revenue, etc...) and also foreign keys pointing
to dimension tables that represent who, what, where, when, how and why of that event.
Snowflake schema breaks dimension tables further into subdimensions from a regular star schema,
rendering it more normalized.

# What is column-oriented storage?

Fact tables usually contain hundreds of columns and since analytical queries only lookup
a small number of columns, column-oriented storage was devised to optimize analytical queries.
Instead of storing data in rows together, columns are stored in separate files thus making it
more efficient to aggregate columnar values from a fact table. Column-oriented storage stores
columnar values in order, so the 23rd column value value from one file matches its counterpart
from another column's file. Column compression leads to more optimization using bitmap encoding.
Bitmap indexes make data warehousing queries very efficient. Vectorized processing refers to
using bitwise operators on compressed data that is loaded into memory. Column compression
allows for more efficient usage of CPU cycles since they allow for more rows to be loaded in memory.
Sorting in column storage would be done on dates for example then a column value that is often repeated.
This helps with compression as identical values will be consecutive, mostly on the first sort key.
While these optimizations help with reads, writes are less efficient. Inserting a row in the middle
would require a rewrite of all column files. Materialized aggregates (or views) are another type of
data warehouse, and they refer to a view that contains a frequently read aggregation. When the data
is updated, a view has to be updated. A data cube is a common case of a materialized view and it refers
to a grid of aggregates grouped by different dimensions.
