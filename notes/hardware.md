# What is a computer's hardware composed of?

Hardware in a computer is three parts; the CPU, system memory and the I/O, which is the display screen, hard drive, keyboard, mouse, speaker and almost everything else except the CPU and memory. The motherboard hooks all these components and provides power to the components and communication pathways between them.

## What is system memory?

System memory also known as RAM is a bucket for storing bits, and from the point of view of the CPU, these bits combine into bytes each with its own memory address, which is a unique numeric value that identifies said byte. When the CPU wants to read or write a byte in RAM, it refers to it by its numeric memory address. RAM is volatile unlike hard drive, meaning that when RAM loses power, its contents get scrambled. This explains why the OS loads from the hard drive when the system powers up. RAM is faster than hard drive when it comes to reading and writing bytes.

### What does a CPU do?

A CPU executes binary instructions, which are sequences of bits ranging from 8 bits in size to 256 bits. CPU's read each instruction one after the other and executes each accordingly, an instruction with a binary sequence that denotes an operation from the following: copying bytes, arithmetic, bit logic and jumps. Binary sequences denoting operations are arbitrary and thus differ among different CPU's.

#### What is a register?

A register is a small volatile data storage area inside the CPU. CPU's registers have two types; status registers and general purpose registers. Status registers store data that affects the operation of the CPU, some CPU's operate in different modes thus, status registers store bits denoting the current mode. General purpose registers are for storing any data, but their storage size is small often byte-sized. Before performing an operation, the CPU reads data from memory into the registers then copy the result of the operation into memory.

### What is an ISA?

A CPU's programming model consists of its instruction set, the instructions which the CPU understands and its set of registers including their number, sizes and purposes. Those two facets of the CPU are the ISA or the Instruction Set Architecture. If two processors support the same ISA then they can run the same code.

#### How are bytes copied from a register to memory and vice versa?

Copying bytes from memory to a register or vice versa has two methods, either starting with the most significant byte (from left to right) or the other way around from right to left. The former is the big-endian scheme and the latter is the little-endian scheme.

##### What is the hierarchy of storage in a computer?

Storage in a computer increases in read/write speed from hard drive, to RAM with the fastest being CPU registers. But the cost per byte also increases as a result, while capacity in turn decreases. Between RAM and CPU registers, CPU cache exists due to the relative slow speed of RAM. Cache uses a form of RAM called SRAM, which stands for static RAM as opposed to DRAM, which is dynamic RAM used for system memory. Unlike DRAM, SRAM does not require a refresh cycle to keep its content, which allows SRAM to be read and written significantly faster. Due to how expensive cache is, its size is often in MB while RAM is in GB.

###### How does a CPU interface with I/O devices?

When an I/O device needs to communicate with a CPU, it writes to its own registers which the CPU accesses and in turn reads and writes to the device's registers. It is a one-way relationship meaning that the CPU can read and write a device's registers while the device cannot access the CPU's registers. In a memory-mapped I/O, the CPU allocates a chunk at the beginning of system memory to device registers with the rest being for memory addresses. Port-mapped I/O is different in that it has a separate address space named ports that houses device registers.

### What are interrupts?

Interrupts are an alternative to polling, which is that the code periodically checks device registers to see if the device needs attention from the CPU to perform an operation. Interrupts have an interrupt line running from the device to the CPU over which the device can signal to the CPU that it wants attention. When the CPU receives a signal, it runs the interrupt handler; a piece of OS code associated with that device's interrupt line.

#### What is the boot firmware?

When a system powers up, the first code that runs is the boot firmware. The firmware code often resides in a small I/O device, a memory chip, which retains its content due to a small battery on the motherboard. This device resides at a fixed address or port and when the CPU powers on, it executes code at that address. BIOS was the old boot firmware, and stands for basic input output system. UEFI is the newer standard, and it stands for the unified extensible firmware interface. A boot firmware's main task is to jump execution to an operating system loader on one of the system drives.
