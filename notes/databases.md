# What is a database?

A database is a system that stores lots of data usually available on the network handling incoming requests that can overlap. A database has a schema that defines its structure and the shape of the data, the database itself ensures the structure or schema stays the same, meaning no requests can modify the structure of the database.

## What is a transaction?

Databases handle requests called transactions, defined as an independent unit of work enacted upon the data. It's the database's job to ensure that transactions stay independent and don't interfere with each another.

### What is ACID?

ACID stands for Atomicity, Consistency, Isolation and Durability. For a transaction to be atomic means the transaction is all or nothing. So either all modifications of the transaction persist in the database or all of them are not. All the modifications have to roll back or undone for a transaction to be atomic if they don't persist. Consistency in ACID means when a transaction completes, the database maintains a consistent state meaning a state consistent with the rules and constraints imposed in the schema. Isolation refers to the property that transactions should be independent of each other, or overlapping transactions should remain independent and not interfere with one another. Durability refers to once a transaction completes or commits, then all of the changes made to the database persist.

#### What is a relational database?

Relational databases refer to the relational model of data. The relational model for structuring data has a hierarchical model, a network model, an object model, the relational model is the most dominant. The majority of databases are relational databases.

### What is SQL?

SQL stands for structured query language refers to a standard language used by most databases, i.e the language used by clients to talk to database servers. Query refers to a request for data. SQL is a standard from the seventies but not all relational databases use the same SQL language, some have their own variations.

#### What is the relational model comprised of?

A relation in the relational models model consists of tuples and attributes, commonly you refer to relations as tables made up of columns and rows. The relational model refers to the columns as attributes and rows as tuples. In the relational model, the order of the tuples or rows and attributes/columns are not a part of the data. Querying a relational database involves specifying columns by name and filtering rows by predicate. A join queries more than one table combining them into one, also specifying columns and filtering rows by predicate. A cross join of tables would result in the rows of both tables being multiplied to produce a table with all the data in both tables, while rows add up. An inner join is a cross join but then rows filtered by predicate. An outer join starts with a cross join, filtering rows by a predicate like an inner join then add back missing input rows filling blank columns with null. Full outer joins ensure inclusion of all rows from both tables. Left outer joins ensure inclusion of all rows from the left table. Right outer joins ensure inclusion of all rows from the right table inclusion of all rows from the right table. When grouping columns, aggregate functions apply, they produce output values by aggregating values grouped from input columns. Value functions/operators produce output columns derived from other input columns. The order by function sorts rows by column value, either ascending or descending.

### How do you manipulate data in a relational database?

An insert operation adds a row of data into a relational database. Removing rows from a table occurs by specifying a table and predicate. An update or modify operation changes existing rows in a database by specifying which rows need to update with a predicate and then specifying which columns to update with what values.

##### What is a primary key and a foreign key?

A primary key is a set of one or more columns with unique values designated as the main identification for the rows of a table. A foreign key is a reference to a primary key of another table.

###### What is normalization?

Normalization is the process of structuring tables to minimize redundancy. Normalization's purposes are to free the collection of relation from undesirable insertion, update and deletion dependencies. Reduce the need for restructuring the collection the collection of relations as new types of data are introduced thus increasing the lifespan of application programs. To make the relational more informative to users and to make the collection of relations neutral to the query statistics where these stats are liable to change over time.

### What are normal forms?

The first normal is no repeating groups, where no ordering exists among the rows or columns, no duplicate rows, has one attribute per column and no more than one value per cell. The second normal form is no non-prime attribute depends on any proper subset of any candidate key. The third normal form has every non-prime attribute directly dependent upon every super key, where non-primate attributes provide a fact about nothing but the key.

## How do you create a new SQL table?

Creating a new table requires a specification of each data type in each column.

### What are other properties of relational databases?

The security model refers to how a database handles security, the gist of it is when the client contacts the database server has to login and provide credentials, where each user has a role outlining privileges a user has. Views in a SQL database is a special kind of table, or virtual table that does not really exist because it does not have its own data. It's a view into other tables, in short a view is an alias for a particular query but a modification in a view table modifies the base table it's pointing to. Stored procedures are functions within the SQL language. Cursors are iterators over result sets of queries. Indices in SQl are a tool for optimization by attaching an index to some column and then the database creates an index of the values in that column allowing for faster lookup. Triggers refer to some code often a stored procedure, which automatically executes in the database upon the occurrence of some event like some particular row updating. Instead of having a standard protocol for SQL, a standard API exists instead named Open Database Connectivity or ODBC standard, where the ODBC of a query language is responsible for translating the queries into the appropariate protocol for the database.
