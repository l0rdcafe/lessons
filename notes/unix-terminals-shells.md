# What is terminal?

A terminal device is a piece of hardware combining a keyboard with a character display. File descriptor `0` is `stdin` while file descriptor `1` is `stdout`. Read is file descriptor `0` while write is file descriptor `1` for processes interfacing with a terminal character device file. While hardware terminals are extinct, terminal emulator programs replaced them in modern computers. A terminal emulator sends window content to an X Window Server to display on screen as a graphical window and receives text input from the keyboard, sometimes mouse clicks from the X Window Server.

## What is the X Window System Server?

The X Window System Server is reponsible for displaying the GUI windows of processes on the screen. When device events trigger, the X Window Server reads it and then sends it to the appropriate running program. A window manager is a program responsible for drawing the borders around windows and keeping track of the positions of the windows on the screen, moving them around and resizing them.

### What is network transparency?

Network transparency is when a program commmunicates with an X Window Server on a different computer enabling interaction on said different computer while the program itself runs on another computer.

#### What are pseudo terminal device files?

Pseudo terminal device files are often in pairs; one a slave, the other a master. The program imitating a terminal reads/writes from the master while the program that wishes to use this fake terminal reads/writes from the slave.

## What is a shell?

A shell in Unix is a program that reads from a terminal and interprets what the user enters as a command, and executes it. A shell is an interpreter for a programming language, where the user enters the code line by line and the shell executes each line as the user enters it. The most common shell was the `sh` bourne shell. There are different types of shells like `ksh` korn shell, `csh` C shell, `zsh` Z shell, `bash` Bourne again shell, `ash` Almquist shell and `dash` Debian Almquist shell. A shell's main purpose is to run other programs through commands. The `PATH` variable is where the shell will look for executable files when given a command in the terminal.

### What happens when a command is run in a shell?

When a command runs in a shell, the shell forks itself, parent waits for child then the child `exec`'s the command passing the arguments.

#### What is redirection?

Redirection is when a program forks itself, then its child closes `stdin` and/or `stdout` and then opens a file or files and `exec`'s a new program. When the shell spawns off another program, that other program's `stdin` might be reading from the terminal but its `stdout` is writing to another file. Briefly, redirection is when a child process' `stdin` and/or `stdout` redirect to different files. By having separate file descriptors for reading and writing, we could redirect each operation independently.

##### What is pipelining in the shell?

Pipelining happens when a command is piped using the `|` character with the first command's `stdout` getting piped into the second command as its `stdin`. The shell creates a pipe, forks itself twice, the parents waits for both children, the first child redirects `stdout` to the pipe before it `exec`'s the first command, other child redirects `stdin` to the pipe before it `exec`'s the second command, with both commands execute in parallel. Piping is not limited to just two commands. A pipeline is one command or more separated by a `|` character. A command-list is one or more pipelines separated and terminated by `;&` or a newline character.

### What are built-in commands?

Built-in commands are commands that exist in the shell and don't spawn off new programs. Examples of which are `cd`, `kill`, `help`, `alias`, `printf`, `echo`.

#### How are commands executed in a subshell?

The shell forks itself, then the subshell forks itself to the command process `exec`'s while its parent or the subshell waits for the process to finish. If a command pipeline ends in with an `&` character, it runs in the background meaning the shell does not wait for the pipeline to complete and thus it runs in a subshell. Additionally, the pipeline may not read the terminal, while it may or may not write to the terminal.
