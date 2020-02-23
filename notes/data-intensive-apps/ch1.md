# How do you think about data systems?

Modern applications tend to be more data-intensive as
opposed to compute-intensive. The biggest problems in
data intensive applications are data complexity, amount of
data and the rate at which the data changes. Thinking about
data systems, queues, caches and databases are viewed differently
although they are quite similar in that they all store data but
their access patterns are different thus leading to different implementations
and performance.

# What is reliability?

Reliability refers to a system being able to maintain
correct functionality in spite of hardware/software faults
or human error. Reliable system performs expected user
functionality, tolerates user mistakes or unexpected use,
has good enough performance for the use case, and prevents
unauthorized access and abuse. A reliable system that can
anticipate faults is a fault-tolerant or resilient system.
Faults are different from failures, in that they refer to
a part of the system deviating from its spec while failure
describes the whole system completely stopping serving the user.
Reliable systems are designed in a way where faults don't
cause failures since fault prevention is impossible.
Hardware faults are usually fixed through redundancy. Rolling
upgrade refers to a system that can be updated without downtime
while tolerating machine failure. Software errors have no quick fixes
but can be mediated through process isolation, thorough testing,
allowing crash and restart, measuring, monitoring and analyzing
system behavior in production. Minimizing human errors can be done
through thorough testing, good system design and decoupling areas
with most mistakes from areas with most failures. Allow quick and
easy recovery from human error, setting up detailed monitoring,
and implementing good management practices and training.

# What is scalability?

A common cause of system degradation is increased load. This is where
scalability comes in, and it defines a system's ability to cope with
increased load. Load parameters help describe the load, which would help
identify how a system scales in contrast to increasing load. Parameters
differ from project to project depending on a system's use cases. Fan out
is the number of requests needed to make to other services to respond
to an incoming request. An increase in load parameters help describe performance.
Throughput refers to number of requests processed per second. Percentiles
determine latency better than average response time, since they order times
from smallest to largest and the highest percentiles give a measure to the longest
latency ever recorded. Median is a better measure than mean to know the average latency.
Percentiles are found in service level objectives and SLA's. Head-of-line blocking
refers to a number of slow requests holding up the processing of subsequent requests.
Scaling up refers to vertical scalability (i.e bigger machines) while scaling out
refers to horizontal scalability (i.e more machines). Shared-nothing architecture
is when load is distributed across many machines.

# What is maintainability?

Maintainability is the ongoing process of fixing bugs, keeping a system operational,
investigating failures, patching libraries, adapting to new platforms, mofifying
for use cases, adding new feature and repaying technical debt. These are often
referred to as legacy systems. There are three design principle for software systems
and they are operability; referring to the ease of running the system's operations,
simplicity; referring to new engineers' ability to understand the system,
and evolvability; referring to the ease of adding new unanticipated features
and adapting to unexpected use cases. (also known as modifiability, extensibility,
and plasticity). "Good operations can often work around the limitations of bad (or incomplete)
software, but good software cannot run reliably with bad operations". Monitoring, tracking issues,
updating platforms, security patches and software, keeping tabs on how different systems affect
each other, anticipating future problems and solving them, establishing good practices and tools for
deployment, performing maintenace tasks, maintaining security of system as config changes, defining
processes that make operations predictable, preserving knowledge of the system are ways to attain operability.
Good operability provides visibility into the internal runtime behavior of the system,
provides good support for automation and integration with standard tools, avoids dependency
on individual machines (allows some to be taken down for maintenance without affecting system
operations), provides good default behavior, self-heals and minimizing surprises; remaining predictable.
Softwares mired in complexity are referred to as a big ball of mud. Removing accidental complexity
is aided by abstractions. Abstractions hide complexity behind a simple facade.
