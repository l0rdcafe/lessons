# What is **blockchain**?

**Blockchain** is a decentralized data structure most commonly used in **cryptocurrencies**. It's a single public ledger that all nodes in the network constantly verify it. Digital signatures help secure the ledger by making it infeasible for nodes in the network to forge others' signatures. Signatures are not unique per user but per message or rather transaction involved. Each user has key pairs; public and private. Signing a transaction involves a user's private key and the message/transaction to sign, meaning the slightest alteration of the message changes the signature. Verification of a signature takes the message, signature and a user's public key. A signature is a product of the SHA256 cryptographic hash function, which produces a 256-bit signature. Instead of having a single location for the ledger, each node has its own copy of it and broadcasts a transactions as they happen, and each node verifies the ledger. A block is like a page in the ledger, combined they form a **blockchain**. Moreover, to maintain an order of the **blockchain**, each block has the hash of the previous block in its header. If there are conflicting **blockchains** broadcast, a node defers to the longest chain as it's more probably the correct one as it has had most computational work. Each block has a capacity of 2,400 transactions.

## What is a **cryptocurrency**?

A **cryptocurrency** is a form of digital currency relying on the **blockchain** data structure where the public transaction ledger is the currency.

### What is _proof of work_?

_Proof of work_ is the computational work required for each node to provide when validating the blocks in the transaction history. It's encrypted using SHA256 and requires the first n bits (32, 40) to be 0. When provided, the node that completes the work in guessing the solution gets a reward in the form or **cryptocurrency**, aka mining. Like transactions are valid through digital signatures, blocks are valid through proofs of work.

#### What is a **Merkle Tree**?

**Merkle Tree** or hash tree is a data structure where every leaf node has a label of the hash of a data block and every non-leaf node has a label of the cryptographic hash of the labels of its child nodes.
