# What is a transaction?

Transactions group several reads and writes into one logical unit.
Commits indicate the transaction is successfully completed, while
rollbacks indicate the transaction failed. Transactions were
created to simplify the applications dealing with databases.
Transactions guarantee ACID; atomicity, consistency, isolation
and durability. Atomicity refers to each transaction being its own
unit meaning that failures are tolerated due to rollbacks. Consistency
refers to having invariants in data like equal credit and debit amounts
in accounting books. Foreign key and uniqueness constraints also
provide consistency. Isolation refers to concurrent transactions
operating in different contexts. Serializability describes the effect
where a transaction pretends to be the only transaction running on
a database. Database ensures when a transaction commits that the
result is the same as if the transactions had run in series.
Durability is the guarantee that once a transaction has successfully
completed, the data committed persists.

# What are weak isolation levels?

When two transactions touch different data, they can be safely run in parallel.
Race conditions and concurrency issues arise when a transaction attempts to
read data being updated by another. Transaction isolation is a database guarantee
that transactions run as if they are in series, or in other words are serializable.
Guaranteed serializability isn't performant so databases usually have weaker
isolation levels among transactions. Read committed transactions guarantee that
you only read data that has been committed (no dirty reads) and no dirty writes,
as in updating data that has been committed. Nonrepeatable reads are a concurrency
anomaly where if a user reads a value mid-transaction that are not reflective of the
end state. Snapshot isolation ensures the data is read from a consistent snapshot
by each transaction. Multi version concurrency control is a model that maintains
different snapshots over of the same objects to allow for snapshot isolation.
Lost update is a concurrency problem where data is read, modified then updated
by two transactions causing the first modification to be lost. Atomic updates
mediate issues regarding lost update. Cursor stability refers to a transaction
taking an exclusive lock on the object when reading it blocking other transactions
from reading it until it commits or aborts. Atomic writes are a feature of databases
employing locks and cursor stability. Explicit locking is more thorough by
enforcing a read-modify-write cycle by blocking concurrent reads until the transaction
commits. An alternative would be to allow concurrent read-modify-write transactions
to run in parallel and allow the transaction manager to detect lost updates sometimes
using snapshot isolation aborting lost updates and forcing a retry of the read-modify-write
cycle. Some argue that a database must prevent lost updats to be considered to
have snapshot isolation. Databases without transactions employ a compare-and-set technique
where an update will be aborted if the value of the row has changed since its last read,
in order to prevent lost updates. In replicated leaderless or multi-leader databases where
concurrent writes are allowed, conflicting sibling writes are created that are then
resolved using custom data structures or application code. Last write wins method
can cause lost updates in replicated databases, where allowing all commutative operations
such as adding data to a set or incrementing a counter then merging all operations
thus eliminating lost updates. Write skew is another race condition when two transactions
commit at the same time violating an application constraint. Write skews can be fixed
through serializable isolation levels or locks on dependent rows for a transaction.
Phantoms are writes in one transaction that affect the initial read in another transaction,
which could change a precondition for an update that causes write skews. Materializing
conflicts refers to creating a table of locks that a transaction would acquire before
attempting an update. It is often employed as a last resort solution since serializability
is the strongest isolation level.

# What are the different implementations of serializability?

Serial execution refers to transactions being executed sequentially. An early
approach to serializability was encapsulating transactions in stored procedures,
which quickly turned out to be not performant due to the nature of user interactions
on the web. While serial execution simplifies concurrency, write throughput could
be drastically limited if it's only done through a single CPU core on a single machine.
Partitioning fixes this issue but if a transaction requires multiple partitions, then
the database needs to coordinate between them and employ locks to ensure serializability
across all affected partitions. Performance wise, this approach is orders of magnitude slower
than single-partition transactions. Serial execution is viable when transactions are small
and fast (i.e no head of line blocking), when active data sets can fit in memory, data
sets on disk slow down the system, write throughput can be handled by a single CPU core.
Two-phase locking is another implementation of serializability where concurrent reads are
allowed while writes require exclusive access obtained by read/write transactions blocking both
reads and writes for other transactions until they either commit or abort. This is an exact
opposite of snapshot isolation, which entails that readers never block writers and writers
never block readers. This is implemented by using two kinds of locks, shared and exclusive.
When a transaction attempts a read, it must acquire a shared lock, which it can only acquire
if no other transaction has an exclusive lock on the object. For a transaction to write,
it needs to acquire an exclusive lock on the object while no other transaction has
a shared lock on it, locks are released when the transaction abort or commits. Deadlocks
can be a byproduct of a two-phase lock approach where two transactions are waiting for
each other to release locks on the same object. Performance of two-phase locks is infamously
bad due to a dramatic reduction in concurrency. Predicate locks eliminate phantoms by instead
of locking an object, they lock objects belonging to a certain read query thus not only protecting
write skews on existing objects but also potentially new ones. Index-range locking improves on
predicate locks since they are not so performant. While not as efficient since they might lock
a bigger range of objects than needed, they are more performant since looking up locks is faster.
If indexes don't exist, full table locks are a fallback that is not very performant. Serializable
snapshot isolation is another implementation of serializability. Two-phase locking is a kind of
pessimistic concurrency control, assuming anything could go wrong during a transaction. Similar
to mutual exclusion, which separates data structures across multiple programming threads.
Serial execution is the most pessimistic extreme of concurrency control as it essentially
allows for entire database locks for each transaction. SSI on the other hand is optimistic
where it assumes everything will go well and allows for all transactions to do their work
and checking for violations after the fact, aborting any violating transactions and forcing retries.
Optimistic concurrency control is the most performant and works best with commutative atomic operations,
wheere the order of operations does not matter like incrementing a counter. Decisions based on an outdated
snapshot version are mitigated by aborting transactions implementing them, they are detected if
an uncommitted write occurred before a read in MVCC systems or detecting writes that affect prior reads.
SSI are more performant than two-phase locking since readers don't block writers and vice versa.
The rate of aborted transactions also affects performance in SSI since retries are forced.
