# What is an operating system?

An operating system is a program that manages hardware and running other programs. In OS, a running program is a process, and the OS manages different processes from interfering with one another when they're running concurrently. Moreover, one of the OS's jobs is to provide an interface for the processes to interact with the hardware while retaining direct control over the hardware devices, which can be done through processes interacting with devices using system calls provided by the OS. Another responsibility of the OS is providing a filesystem absracting over the storage devices so processes can read/write files without worrying about file storage. Lastly, an OS provides a UI for users to interact withe the computer to run processes and manage the filesystem.

## What is a device driver?

A device driver is a plugin module of the OS that handles the management of an I/O device.

### How can an OS run processes concurrently?

A CPU/core can run one process at a time, but an OS should be able to run processes concurrently. Moreover, running OS code while running a process cannot be done, therefore the solution is alternating and jumping between processes' instructions and OS code. This management of concurrent processes is a job for the scheduler or kernel; a part of the OS that allocates instructions to processors/cores. Sequentially, it starts with the CPU receiving a hardware interrupt whereby the interrupt stores the program counter (current running instruction), then the interrupt invokes the handler, which in turn saves rest of state of the CPU for the process, then the handler does its business and when it finishes invokes the scheduler. The scheduler selects a process to run, restores state of the CPU for that process and then jumps execution to that process. Not only do processes share the cores, they also share system memory. It is also the OS' job to regulate the use of memory to ensure each process does not interfere with other processes' portions of memory including the OS code. The OS can access any portion of memory that belongs to a process, but processes can access their own portions of memory and not the portion belonging to the OS. The hardware enforces this restriction making it impossible for a process to touch addresses outside of its own portion of memory. The CPU runs in two privilege levels, when OS code runs, the CPU is put into a privilege level that allows access of the I/O devices and any address in memory. When a process runs, the CPU is put into a privilege level that triggers a hardware exception when the code attempts to directly access the I/O devices or disallowed addresses for that process. Processes touch their own memory not anything else in the system.

### What are system calls?

System calls are the means by which processes initiate requests to the OS. System calls provide functionality for operations like reading/writing files or for sending/receiving data over the network. To invoke a system call, a process must use a specific CPU instruction often named syscall, in which the process specifies a system call number. After the invocation of the instruction, the CPU looks at the system call table for the address of the routine corresponding to the system call number and jumps execution to that address.

#### How does a process use memory?

A process divides its system memory into three portions, its call stack, its heap and for storing the process' code itself in a section called text. The stack stores local variables used by the process and the heap stores everything else. The stack is a chunk of memory that starts out unused until the invocation of the first function, then the stack stores its local variables in a frame. When another function invocation takes place, the stack adds another frame with the new function's local variables. As functions return, frames pop off the call stack and the stack pointer goes down the stack until it finishes execution of all functions. In PC's, a process' memory address stores the stack at the top of its address space and the text at the bottom, while the heap occupies the remaining space in the middle.

##### What is a stack boundary?

A stack boundary is a pointer that keeps track of the size of the stack space that is kept in another CPU register. When the stack pointer runs past the stack boundary, this triggers a hardware exception and the exception handler may move the stack boundary to increase the stack space. But at some point, it can choose not to grow the stack space when it grows too large. When too many recursive calls take place, and the stack runs out of space into the megabyte range, a stack overflow happens.

#### How does a process' heap work during execution?

Unlike the stack and text, no heap space exists when the process starts execution. The process explicitly requests chunks of heap storage from the OS with a system call. In the call, the process specifies the size of the heap chunk requested but the OS decides where to locate these chunks in the address space, leading to the chunk locations not being necessarily adjacent. When the process finishes with a heap chunk, it gives it back to the OS with a system call to deallocate it. The OS is responsible for keeping track of free address space for future allocations, but as allocations and deallocations take place, memory space becomes more fragmented thus decreasing the heap chunk sizes available for the OS to allocate. Good allocation algorithms minimize this fragmentation but the fragmentation problem still exists. Failing to properly deallocate a process' unneeded heap memory is a memory leak.

###### What is swapping?

To avoid running out of system memory, the OS temporarily stores heap chunks on the hard drive at the cost of a relatively slower read/write of data for processes. A swapped page on a hard drive will rarely exceed a gigabyte of storage.

### What is a process' lifecycle?

After the OS does its work to create a process, the process transitions to a waiting state meaning it waits for the scheduler to select it. When the scheduler selects the process, it transitions to a running state, when the scheduler selects a different process on the same core, the process transitions back to the waiting state and lastly, when the process finishes it transitions into its final state; terminated. There is an additional process state called blocked, where the process waits for an external event in the system before it can proceed as opposed to waiting to be scheduled. Reading files can trigger a process' blocked state due to hard drives being relatively slower than CPU operations. After the external event fires and terminates the blocked state, the process goes back to the waiting state until the scheduler selects it for execution.

##### What is a filesystem?

The OS provides a layer of abstraction known as the filesystem in the form of directories and files, which enables processes to read/write from any kind of storage in the same way whether a flash drive, hard drive, a CD, etc... The storage area of each drive has one or more contiguous chunks known as partitions. Partitioning a storage drive serves some niche cases such as installing more than one operating system on a single drive. The filesystem is responsible for the logical assembly and reconstruction of a file when a program receives file data. This is due to some file data being stored in an illogical non-sequential way in storage. File and directory names have to be unique within the scope of a directory. The first directory in a new partition is the root directory, which cannot be deleted.

###### What is IPC?

IPC is Interprocess Communication; an umbrella term for any mechanism of the CPU that facilitates communication between processes. Files are the simplest type of IPC, and can be read/written by processes and those can serve as channels of communication between them.
