# What is Unix?

Unix is an OS created in the 1980's, nowadays a unix system refers to an OS that applies similar principles of the original Unix system such as Linux, Mac OSX, FreeBSD and OpenBSD. While Mac OSX has a large market share, Linux and BSD are present as server OS' with Linux having the dominant market share.

## What are POSIX and SUS?

POSIX and SUS are Unix standards from the 1980's, with the former short for Portable Operating System Interface for Unix and the latter short for Single Unix Specification. Most variants of Unix more or less conform to both of these standards.

### What defines an OS?

The primary thing that defines an OS is what system calls it makes available. System calls are functions exposed by the OS for processes to interface with a computer's hardware like read/write data on a storage device or send/receive data across the network. A special instruction is the sole way to trigger a system call function invocation, the reason for this is that when a process executes it cannot read and execute data that's part of the OS kernel. Each process lives in its own part of memory isolated from other processes. The instruction to invoke a system call breaks out of said memory box. The CPU then looks up the number of the invoked system call on a table. The kernel code and the table for these system calls live inside the address space of each process, often at the top of the address space with the stack starting immediately below it. The kernel code is inaccessible to the process until it invokes a system call with a special instruction, causing execution to jump up to the kernel code, and adds a stack frame to its stack for that syscall.This causes the system call to execute in the context of the process which invokes it avoiding a context switch and thus swapping out memory tables of the current process.

#### What do system calls do?

System calls help managing processes, starting a process from within another. System calls also deal with file creation, read/write, deletion, etc... Unix has system calls for sockets, where a socket represents one end of the network connection, so when a program wants to talk to another program in another system, you create a socket in your program and that socket communicates with the other socket in the other program. Unix has system calls for signals, which are notifications of some event or condition sent from the OS or a process to some process. When a process attempts to read/write a byte from another process, it triggers a hardware exception in the CPU causing it to execute designated piece of OS code, which sends the process a signal indicating an error. Unix system calls include IPC meaning a mechanism for processes to communicate with each other. Network sockets are a form of interprocess communication. Moreover, terminals and command line shells have a number of unix system calls. Threads are another aspect with its own unix system calls. When a process runs, it has one thread of execution. With more than one thread, a process is split into threads with each thread having its own pointer (determining current instruction) and its own stack. Threads are like processes that run independently but share the same address space. So any thread in the process can read/write to the heap in the address space. I/O devices have their own system calls, from the system clock, video adapter, to storage devices. In Unix, I/O devices have the same system calls for files causing I/O devices to be treated like files. A system call is less of a demand and more of a request, a process asks the OS to do something, which could in turn fail and throw an error or succeed.

##### How do processes work?

A process stores its data in an address space, in addition to its kernel code, stack, heap and text portions, it stores uninitialized data and initialized data, which are portions in memory set aside for storing global variables with initialized data having initial values while uninitialized data not having initial values. Kernel code and code portions are fixed in size and load at the start of the program. The stack section starts out empty and over the course of the program it grows and shrinks as function invocations occur and functions return. The heap section grows using system calls where the process asks the OS to map a part of the address space to actual addresses in memory.

#### How is memory allocaed in a process?

A process invokes a `mmap` system call to allocate memory in a process. It then adds some pages into the process address space then maps those pages to actual addresses in physical memory. While the `munmap` system call does the opposite in that it deallocates memory pages from the address space so they no longer resolve to actual addresses in physical memory. If you do not deallocate memory after allocation as you don't need it, you can run out of memory in larger programs while in smaller programs it does not bear a huge cost.

### How can you create a new process in Unix?

Creating a new process in Unix happens by a process copying itself, including its entire address space, copying all other things associated with the process like user ID's, the environment, the file descriptors. The fork system call is responsible for that operation.When the fork returns, both processes pick up at that moment when it returns, the difference between them is the value returned from the fork system call. In the new process, the fork; or so called child process, the fork system call returns `0`, while in the original process the parent process which invoked fork initially, returns the process ID of that child process. Instead of manually copying a process as in older Unix, newer Unix has virtual memory so a copy of the memory table is the requirement to create a new process not the actual content in memory. To maintain independence between both processes in terms of writing to a process, the new pages of the newly created process have a copy-on-write flag indicating that as soon as either process attempts to write to that page in memory, then a copy of that page occurs and the address table of the new process updates to point to that new page.

#### How can you load a new program in Unix?

The `exec` system call loads a new program in Unix, by replacing the current program in the process with a new program. The system call discards the old address space and creates a new one by loading the new code from an executable file with a new blank address space. A processes tree starts with an init process, which then spawns child processes each having a unique ID, a process ID number or PID. `init` always has a PID of `1`. In addition to a PID, processes have a user ID indicating the user which owns this process. Some system calls could fail if a user does not have permission to perform such actions. User ID `0` is the root user or superuser. User ID's have three types; real ID denoting the owner of the process. Effective ID determining the privileges of the user for the process. Saved ID set by `exec` to match the effective ID. The root user can set UID's using `seteuid` system call, which sets the effective user ID and the `setuid` system call, which sets the real, effective and saved UID's. 

##### How does a process terminate itself in Unix?

In Unix, a process invokes the `_exit` system call to terminate itself, which takes an exit code number as an argument indicating to other programs why this program exited. Upon termination of a process, the parent of a child process reads its exit code as it has access to do so unlike other processes. The `wait` system call blocks the parent process until its child process terminates. The `wait` system call then returns the child process' exit code when it terminates.

### What is a processes environment?

A processes environment is a location where a process executes. The heap stores the environment of the process and the address of its location is a global variable in the data section.

#### What are the system calls for dealing with files?

`open` system call opens/creates a file and returns a file descriptor. `close` releases the file descriptor. `read` copies bytes from a file to memory to read a file's contents while `write` copies bytes from memory to a file's contents. A file descriptor uniquely identifies a file. `read` and `write` system calls may block depending on the file being read/written. A call `write` will copy data from the process to a buffer in memory outside the process controlled by the OS, then the OS writes the data from the buffer to the storage device (hard drive). Similar to `write`, `read` system call copies a file from storage to the OS memory buffer and then copies it to the process. This buffer intermediary is for peformance reasons due to storage devices being relatively slow to the CPU. `truncate` system call shrinks a file size by receiving the new file size as an argument, `truncate` can expand files as well. `lseek` system call moves the marker for reading/writing to files around a file. `umask` systme call sets default permissions for new files and directories. `chmod` syscall sets permissions of an existing file or directory. `chown` syscall sets the owner of a file or directory. Each file and directory in a partition has a unique inode number. `mkdir` system call creates a directory while `rmdir` removes a directory. `getdents` system call gets directory entries or reads a directory's contents. `mount` system call attaches partition to the unified file system while `umount` detaches partition from the unified file system. `chdir` syscall changes the current working directory. `mkdnod` system call creates a regular file, device file or named pipe. `pipe` system call creates an anonymous pipe and returns two file descriptors. `kill` system call sends a signal to a process while `signal` system call sets a signal handler, ignores it or trigger its default action.

##### What is a file descriptor?

A file descriptor is a number in the process that uniquely identifies an underlying data structure what's called a description. `open` system call returns a new file descriptor with a new underlying file description. Reading/writing via a description causes reading/writing to happen in a memory buffer in the OS.

##### What are other types of files in Unix?

A symbolic link is a file like any other file but it does not have any content. It just has a link/file path pointing somewhere else. Device files represent hardware devices and they are a way for processes to send/receive data from devices using the same system calls to read/write files. Pipes and sockets are means for interprocess communication that is sending data between processes. Pipes communicate between two processes on the same system whereas sockets can connect processes on different machines across a network. `symlink` system call gets two paths to create a symbolic link, the path linked to and the current path. Block devices are devices with large storage areas like hard drives. Character devices are devices with little storage areas. Storage partitions are made up of blocks where a block is read/written as a whole, all blocks are of uniform size. An inode for a file or directory is often stored on more than one non-adjacent block in a partition.