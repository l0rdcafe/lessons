# What are data models?

Data models define the structure of the data and enforce how to
think about designing software solutions. There are two paradigms
to modeling data, relational models or document models. Relational
models organize data into tables where each relation is an unordered
collection of tuples. Relational databases had roots in business data
processing while nowadays they're used more frequently in transaction
processing and batch processing. Document model or NoSQL were born out
of a desire for greater scalability with higher write throughput,
specialized query operations, desire for a more expressive and dynamic
data model. An object relational mismatch refers to application code
object data structures and relational tables being incompatible, also known
as impedance mismatch and thus require translation to match. ORM's abstract
away the translation step and allow for basic operations on the data.
Normalization is the process of removing the duplication of human-meaningful
information (i.e text) in a relation model, instead replacing them by ID's in
different relations. Document models don't need joins for one-to-many relationships
and support for joins is weak. In relational databases, the access path to the data
is determined by a query optimizer not the developer. Document databases on the other
hand reverted back to the hierarchical model of storing data where a record's associated
data would be nested. Document reference and foreign key are analogous in
linking one-to-many and many-to-many relationships. Document databases don't allow
direct access to nested items within a document. Document databases have
schema flexibility also referred to as schema on read, where the structure of
the data is implicit and interpreted when data is read, while relational databases
implement schema on write where the schema is explicit and database ensures all
data written adheres to the predefined schema. Schema-on-read is similar to runtime
type checking while schema-on-write is similar to compile-time type checking.
Documents are stored in a single continuous string giving it storage locality,
allowing for faster reads of entire documents.

# What are query languages?

SQL is the de facto standard for querying relational databases and is declarative
by nature while IMS and CODASYL are imperative. Declarative API's can be parallelized
since their order of execution is not as crucial as with an imperative API. MapReduce
querying is is a programming model for processing large amounts of data in bulk
across many machines. It is somewhere in between imperative and declarative and is
usually found in document databases.

# What are graph-like data models?

When many-to-many relationships become common in data, then graph-like data models
present themselves as good solutions, composed of nodes and edges. Examples are
social graphs, web graph (i.e nodes are web pages and edges are HTML links), rails
networks (i.e junctions are nodes and edges are railway lines).
