# How did computing begin?

In 2500 BC in Mesopotamia, a hand operated calculator known as the abacus helped with calculations, storing computation state and do addition and subtraction. The term computer referred to a job where someone did complex calculations sometimes with the aid of a machine, writing pre-computed tables. The step reckoner was another device that also bore mechanical features like the abacus, but it improved on the abacus' functionality and was able to multiply and divide numbers, becoming the first device with the capability to do so. Charles Babbage proposed a device called the difference engine that could approximate polynomials, which describe the relationship between variables, starting construction 1823. But in 1991, did historians finish construction on the difference engine based on Babbage's drawings and it worked. Babbage had a more complex machine dubbed the analytical engine, envisioning it as a general purpose computer essentially what we know today as computers. For the US census, Herman Hollerith built a mechanical tabulating machine like a step reckoner but had electrical components, the machine used punch cards where grid cells punch out to represent data. Hollerith later found the tabulating machine company, which merged and then became IBM.

# What are the origins of digital computing?

Harvard Mark I was the one of the largest electromechanical computers built in 1944 for the allies in WWII. It contained 765,000 components, 3,000,000 connections and 500 miles of wire.  The brains of these machines were relays, electronically controlled mechanical switches that has a control wire determining whether the circuit is open or closed. Relays presented slow computation speed due to its physical mass causing circuit switches to be slower than electronic switches, as well as being susceptible to wear and tear by its nature thus increasing maintenance overheads. In 1947, operators found a dead moth from a malfunctioning relay in the Havard Mark I. Grace Hopper noted from then on when anything went wrong with a computer, we said it has bugs in it. In 1904, John Fleming Ambrose created the thermionic valve which holds two electrodes in a glass bulb, also the first vacuum tube. An electrode could heat up  to cause thermionic emission while the other electrode if positively charged, the electrodes would move across the vacuum otherwise, they woudln't. While they're still fragile and burn out like lightbulbs, vacuum tubes were an improvement on relays. The Colossus MK I was the first wide use of vacuum tubes in a computer designed by Tommy Flowers and completed in 1943. In 1947, the transistor, which enables a reduce in cost, size and improve speed, Bell laboratory scientists invented it as kind of an electronic relay. Transistors weren't made of glass and built of solid material thus known as solid state components. This led to smaller and cheaper computer like the IBM 608 released commercially in 1957. The construction of transistors boomed in Santa Clara and San Jose, and since semiconductors were mainly made of silicon, so that area of California became Silicon Valley.

# What is Boolean logic and logic gates?

Using transistors, we can use binary to represent data. Boolean logic is logic relating to true and false values invented by George Boole, and is thus binary in nature, `0`'s and `1`'s are obvious representation of `false` and `true` respectively.  Some computers were ternary and also quinary instead of binary. There's three fundamental operations in Boolean algebra, a `NOT` an `AND` and an `OR`. and `XOR`, also called logic gates. `XOR` is kind of like an `OR` but the output is `false` when both inputs are `true` or both inputs are `false`, meaning the output is `true` when either input is `false` and the other `true`. (coffee or tea?)

# How are numbers and letters represented with binary?

A binary value can represent numbers and letters based on binary maths, its rules and base-two notation as opposed to regular numbers or decimal notation, which are base-10 notation. So instead of multiples of 10's, it's in multiples of 2's, thus `101` value denotes a four, no two and a one, equalling `4 + 0 + 1 = 5`. Each binary digit is a bit. 8-bits have a limit of 255 values, so 24 and 32-bit computers exist for less limitations. A byte is 8 bits, so 10 bytes are 80 bits. ASCII invented in 1963, a 7-bit code enough to store 128 different values for capital, lowercase letters, and punctuation. ASCII used numbers to represent letters going from 0 to 127. Since computers were 8-bit, that meant 128 to 255 remained unused and then Russians, Greeks and others used their own letters for the empty slots. When reading a document with special characters in another region, the text would become scrambled due to incompatibility issues. This led to Unicode in 1992 to help unify all characters in one universal encoding scheme. It uses 16-bits to expand to millions of different characters.

# How do computers calculate?

The arithmetic and logic unit or ALU controls mathematical operations in a computer. As the computational brain of a computer, every operation uses it. It has two areas, an arithmetic and a logic unit. The former performs additions, subtractions and also increments numbers. The logic unit performs logical operations like `AND`, `OR` and `NOT`.

# What are registers and RAM?

Random Access Memory or RAM stores progress state while power is on. Persistent memory is more long-term memory of computers that works while power is off. By combining an `OR` and an `AND` operation with a `NOT` creating an And-Or latch, a computer can latch onto a specific value and stores it. Putting data into memory is writing while fetching data is reading. An improvement upon this would be a gated latch, which reduces inputs to two values `write enable` and `data in`, which when `write enable` is `true`, the output is whatever the `data in` value is. But if `write enbale` is `false` then output will always be the last `data in` while `write enable` was `true`. Registers consist of gated latches where each latch has a memory address to write value into memory. A collection of registers in 256-bit memory takes an 8-bit address consisting of 4-bits for input and 4-bits for output, as well as write and read enable, that basically is RAM; a group of memory addresses each with their own written data where each value is 8-bits. SRAM is short for static random access memory.

# What is the CPU?

The central processing unit's job is to execute programs, which consist of a series of operations known as instructions. The CPU controls the ALU, memory and other components of a computer. CPU's have three phases, fetch, decode and execute. Fetch is when the CPU fetches the instruction from memory, decode is when it reads its instruction and execute is when it performs said instruction. Clocks regulate the pace of program execution by sending an electrical signal at precise and regular intervals. The speed at which the CPU can carry out each phase of its cycle is its clock speed, measured in Hertz. Overclocking is when clock speed increases causes faster execution, while underclocking is the opposite.

# What are programs and instructions?

CPU's are programmable meaning different sets of instructions lead to different operations. Instructions are the building blocks of programs, depending on conditionals and potential loops, a CPU could execute some instructions more than once. CPU's are hardware controlled by software. Instruction length is a measure given in bits, i.e 32-bit. As technology evolves and processors grow, instruction sets are getting larger. A caveat of advanced CPU models is getting data in and out of memory fast enough from RAM. Cache is a part of the CPU that makes getting data from memory faster by reducing the clock cycles taken to get data from RAM. Duo-Core or Quad-Core processors mean that it has more than one processing unit in a single CPU chip. It's kind of like having a set of CPU's.

# What is a Von Neumann computer?

A Von Neumann computer consists of a CPU, a memory to store data and instructions, an ALU, a data register, an instruction register and an instruction address register.

# What is programming?

Programming of older computers took place using hardware, proving cumbersome, a migration to software programming needed to occur. Computer hardware can solely handle binary instructions, it's the language that machines speak often called machine language or machine code. An informal description of a program is pseudocode. An assembler is a program that parses plain text code converts it to machine language so it's understood by the computer. The compiler takes care of assembly code and memory allocation when using a higher level programming language, foregoing low level details. i.e python, js. Syntax is the set of rules that govern structure and composition of statements of a programming language.

# What is a Turing machine?

A Turing Machine consists of an infinitely long memory tape, which stores symbols and a device called a read-write head, which can read and write or alters symbols on the memory tape. It also has a state variable in which you can store data about the current state of the machine, as well as a set of rules describing what the machine's doing.

# What are computers built of?

Computers consist of discrete components. Transistors, vacuum tubes, and diodes are examples of discrete components. To reduce complexity of computer hardware and discrete components, transistors or other components would bundle up in their own components called Integrated Circuits or IC's. IC's are sort of like lego blocks for computer engineers, meaning they are building blocks for computers.

# What is Moore's law?

Moore's law postulates that every two years due to advances in manufacturing and materials, you could fit twice the number of transistors into the same amount of space. In 1968, Robert Noyce and Gordon Moore founded a company combining the words integrated and electronics, thus founding Intel.

# What are operating systems?

Operating systems are the default program on a computer, which enables quicker program loading. Computers get programs in batches instead of being manually loaded by an operator one by one. Operating systems became an intermediary between software and hardware or peripherals through creating an abstraction of device drivers, allowing programmers to talk to input and output or I/O computer peripherals. UNIX system separated the OS into two parts, its core functionality including memory management, multitasking and dealing with I/O known as the kernel. The second thing was the tools that came with the OS like programs and libraries. Despite Windows domination in the 90's, Windows OS still lacked proper memory protection.

# How did computer memory originate?

Computer memory started with cyclic access memory using delay line memory as opposed to random access memory in the EDVAC; the first computer with persistent stored data, meaning you can read stored data in sequence instead of randomly like modern day RAM.

# What are files and how are they stored?

All files under the hood whether text, audio, image or video file have some metadata related to the files in their beginning then followed by the file-specific data, the data stored is totally in binary. An operating system's file system manages memory allocation for files in blocks, with each file's metadata specifying creation date, modification date, file length, and memory location. Efficient OS' allow for files to grow into more than one block; a process known as fragmentation where a stored file grows into non-consecutive chunks in persistent memory. Defragmentation is the process of finding and combining fragmented files in memory.

# How does compression work?

Compression works by finding repetitions and optimize their allocation through either adding run length of each repeated byte into the file or making compact representations of the repetitions using a reference dictionary that helps decompressing the file, which sometimes could increase file size but scarcely does; these techniques losslessly compress.

# How do users interface with computers?

In the beginnings of computers, humans used gears and other mechanical components to program and interact with computers. Data feedback was always using paper printers. Indicator lights then took over as immediate visual cues giving data feedback more instantaneously than paper printers. Human interactivity with computers started in the 50's with keyboards. Telegraphs worked like chatrooms in that typed text would get electromechanically transmitted to another telegraph machine far in distance. By 1970, after increase in the commercial availability of televisions screen-based terminals with keyboards giving instant feedback.

# How do screens paint data?

CRT's had two painting modes raster and vector scanning. Screens paint data using graphics card, which read data from memory and convert them to pixels on screens. Computers reserve a special memory place for pixel data called the frame buffer, computer RAM was initially used but later VRAM; located on the graphics card itself became standard for higher speed access.

# How did personal computers come about?

In 1975, the first personal computer became commercially available, its name was the Altari 8800 due to decreasing costs as well as government funding and consumer demand. Apple I followed but like the Altair they were DIY in assembling it and thus weren't popular. Until the Apple II came about as a more complete personal computer. IBM then took note that their market share was shrinking and thus released the IBM personal computer to compete with the market.

# What is a GUI? 

Graphical User Interface was first seen commercially on the Apple Macintosh in 1984, that a keyboard and a mouse could control using a point and click interface. Xerox park in Palo Alto was where the first iteration of a complex GUI existed in the late 70's, that Steve Jobs took note off and nurtured into a polished product. Later on Apple lost market share and thus stability and Microsoft dominated with their release of Windows 1.0 in 1985 and until Windows 95.

# How do computers render 3D graphics?

Computers render 3D graphics on a 2D screen by using algorithmic calculations to apply a 3D plane on a 2D screen, it has two methods being perspective projection and 3D projection. The most versatile shape for 3D rendering is a triangle or a polygon, 3 points are the smallest amount of points needed in a shape for the computer to establish a plane. Rendering has a couple of types to it such as scanline rendering, which scans the polygon line by line painting it in the process. The fill rate is the speed at which the computer fills in its polygons. Anti-aliasing fixes the pixels leaking out of the polygons by fading them for a minimalist approach. The painter's algorithm paints polygons from back to front.

# What is a computer network?

A local area network or LAN is a network of connected computers that enables them to share physical assets like printers as well as files. Xerox Part also created ethernet in the 70's and is the standard for LANs. Exponential backoffs are when connections such as LAN and WiFi exponentially increase their interval of polling for data in a network; it's a means to avoid collisions of data sent through the network between different computers. Splitting the network into smaller networks with switches that mediate between different MAC addresses and whether they're sending data to each other brings up the issue of routing, which defines the process of finding a path for the data to send.

# How does IP deliver packets?

IP delivers packets to the right computer on the internet, then UDP (user datagram protocol); through ports that programs reserve and connect to, listening for incoming data ensure the packet goes to the right program waiting for the data. UDP can work Skype for example when packets get corrupted or missing, but with other more necessary data TCP/IP comes in ensuring delivery of all packets by giving them sequential numbers as well as waiting for an acknowledgement of receipt before sending the next packet.

# What is cryptography?

Cryptography kind of translates to secret writing, it uses a cipher; an algorithm that converts plain text to cipher text to encrypt text. A Caesar cipher is a kind of substitution cipher, while permutation cipher is another. In 1977, the data encryption standard came about applying 56-bit encryption keys. With time, it became insecure and that's when in 2001 the Advanced encryption standard came about with even larger encryption keys, which is now widely used in WiFi, e-mails and a lot more applications.

# What is machine learning and AI?

Machine learning is an algorithm that gives computer the ability to learn from data and thus make predictions and decisions. Machine learning is a component of AI, machine learns data through object features and their values; it needs training data to start learning and predicting, outlining features and their correlation to results. Decision trees are a machine learning technique, where the machine tries to predict unlabelled or unknown data given training data. Limited algorithms that can perform a single task is weak or narrow AI, as opposed to strong AI, which is more rounded and closer to human intelligence.

# How can computers process natural languages?

Computers have two parts to natural language processing and they are parsing and generating text, those are the fundamental components of chatbots.

# What is the singularity?

The singularity according John von Neumann is when technological advancements become inexplicably fast and complex, or in other words a step in human evolution where technology disappears into every day life as a tool like lightbulbs or electricity. 