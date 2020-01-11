# How should inevitable complexity be handled?

Following the principle of good abstractions prioritizing having
a simple interface rather than a simple implementation, inevitable
should almost always be kept internally in a module as opposed
to exposing it to users of it. Config params do the opposite in that
they push complexity upwards rather than pulling complexity downwards.
