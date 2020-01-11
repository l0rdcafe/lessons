# What is a computer program made of?

A computer program is made up of machine code, which are binary instructions read and executed by the CPU. Instead of writing machine code, an assembly language is easier to write and less cumbersome than machine code. In assembly, binary instructions are more human readable. For the computer to execute it, it has to translate it, that process is assembly hence the name assembly language. Assembly language differs from each processor to the other due to each processor having different binary instructions. The assembler translates the source code written by the programmer into machine code. After translation of the source code, the assembler converts it into a `.o` file that is an object file, it then runs through another program called a linker to become executable.

## What are the different types of programming languages?

Programming languages can be either high-level or low-level. Assembly languages are low-level languages. Low-level languages have higher efficiency and more precise control in that the CPU can execute a precise series of instructions as neede. While high-level languages are more expressive and portable in that it can run on different target platforms. The conversion of high-level language source code into machine code is not assembly but rather compilation using a compiler. High-level languages are reliant on assembly code to invoke any system calls. An interpreter reads source code and translates it into action. Sometimes like in Java, both a compiler and interpreter coexist. A Java file compiles to a bytecode file then runs and executes by an interpreter or in Java called a virtual machine into action.

### What is a memory leak?

A memory leak is a bug in which the program allocates a chunk of heap memory but neglects to deallocate the chunk when it's no longer needed.

#### What are the different typing systems?

Dynamic typing systems have no type declarations for variables, parameters and functions and the type checking happens at runtime when operation invocation occurs. While static typing systems have declared types for variables, parameters and functions and the type checking happens before execution. Dynamic typing is more flexible especially using collections, while static typing ensures no type errors lurk in code. Weak typing allows programmer to manipulate bytes of data in any arbitrary way while strong typing allows programmer to manipulate a piece of data with the operations defined for that data's type.

### What is polymorphism?

Polymorphism is when an operation or function can accept a varied number of inputs and/or varied types of inputs, and possibly changes behavior in these different cases. A function signature is a function's name, and its number/types/order of parameters.
