# What is a **microservice**?

A **microservice** is a program with a single functionality. Microservices architecture increases speed of development
at scale. Each sub-domain of a large application is usually its own microservice. A service is an interoperable independently
deployable component that communicates with other services through messages. Bounded context refers to the constraints
and requirements of a microservice. Microservices sharing a database is regarded as anti-pattern and therefore,
each service should have its own database instance where customized entities (i.e User in Order sub-domain)
from other sub-domains are duplicated. Different data stores presents a data sync challenge to maintain data consistency.
In microservices architecture, distributed transactions are not applicable, and thus immediate consistency is lost however,
eventual consistency is still attainable through PubSub and event-based messaging.

# What is a monolithic architecture?

Monolithic architecture refers to a single large application. A monolith has one SDLC while each microservice has its own
lifecycle. Pros of a monolith include simplicity to develop, deploy, build, test and scale. While the cons include
decreased new team members' productivity, growing team size, more complex code as well as close coupling of teams,
inflexibility in using emerging technologies, bad scaling practices, bigger database size, and overloading the main container.

# How do microservices communicate?

Microservices need to establish a communication method and protocol. Remote Procedure Invocation (RPC) is the simplest and works
on the request/reply principle, where a service makes a request of another service, which replies back accordingly. Communication
can be either synchronous or asynchronous. Another communication method is messaging, which refers to microservices exchanging
messages or events via a channel. A service publishes a message to said channel where other services are subscribed and receive
messages. (PubSub) Protocol Format Exchange defines the format of the data exchanged between microservices (i.e text (JSON, XML, YML) or binary).

# What is a Service Registry?

Locations of microservices change dynamically and thus require a service registry where each microservice points to a network location,
which enables microservices to find each other accordingly. Client looks up microservice by querying service registry, which in turn points
it to the location where to interface with the target microservice's API. CORS comes into play when microservices on different servers
attempt to communicate. A circuit breaker is the solution to when a microservice is unavailable for response to another's requst, which could cause
a domino effect where other microservices also get blocked. It can be defined as invocation of a call via a proxy to deviate calls if needed.
Given that UI components would be tightly coupled to different microservices, a common approach is to have an API gateway as a single entry point
that redirects clients to their respective microservices.
