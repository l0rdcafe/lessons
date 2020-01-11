# What is symmetric or private key encryption?

Private key or symmetric encryption is the normal kind of encryption where a message or data's contents appear random by being scrambled. A secret key reverses the encryption and decrypts the message or data.

## What is a cryptographic hash function?

Cryptographic hash functions are useful for digital fingerprinting. A hash function is a function taking any input value and returns a smaller value within a finite range called a hash. If a hash function produces the same output hash for different inputs, then that is a hash collision. A cryptographic hash function is a hash function with special properties including the property that given a hash, it is impossible to find one or more inputs to produce that hash. Cryptographic hash functions have an avalanche effect meaning any small change in input data results in seemingly unrelated hash.

### What is asymmetric or public key encryption?

Public key encryption involves two keys, encrypting using one key and decrypting using the other key. The public key is available publicly and is not secret.

#### What is the jargon in cryptography?

An encryption algorithm is known as a cipher. The encrypted data is known as plaintext, and then the result or output of the cipher is known as the ciphertext.

##### What are the types of encryption?

Substitution encryption is the most basic form of encryption where a public key for decoding the ciphertext denotes how to substitute each letter/character in a message. An example of a substitution is the caesar cipher. Another encryption technique is transposition where a cipher deterministically scrambles the message's letters around. Columnar transposition splits the message into columns that then combines vertically into the ciphertext. One-time pad is type of encryption where the key is random and as long as the plaintext, the key combines with the plaintext resulting in the ciphertext. A stream cipher operates like a one-time pad but keys are smaller at 128 bits or 256 bits in size. From that the stream cipher generates the key stream, which is the actual key combining with the plaintext to produce the ciphertext.

### What is a block cipher?

Block ciphers encrypt messages independently in fixed size chunks. Substitution and transposition are what block ciphers' techniques based on. Block ciphers have types such as DES, Data Encryption Standard, which uses 56-bit keys. Triple DES, its update has 168-bit keys and the newest version AES stands for Advanced Encryption Standard uses 128, 192 or 256 bit keys.

#### What are cryptographic hash functions useful for?

Data integrity checks are an applicationof cryptographic hash functions to ensure data is not corrupt nor tampered with. The most common cryptographic hash functions used are MD5, which uses 128-bit hashes. SHA-1 using 160-bit hashes and SHA-2 using 224, 256, 384 and 512-bit hashes.

###### How can encryption be broken?

Cryptanalysis is the art and science of extracting hidden information from a system. One approach is mathematical techniques including differential, integral, linear analyses and related-key attacks. Brute-force attack is the simplest way to break encryption. Man in the middle attack is an interception of data transmission and possibly sending false malicious data. Side-channel attacks exploit that crypto systems run on hardware and not just software abstractions. By monitoring a system's power consumption, how long it takes to perform tasks, looking for remnant data on storage mediums.
