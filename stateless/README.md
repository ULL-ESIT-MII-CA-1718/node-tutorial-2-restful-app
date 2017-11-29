## Be stateless

REST Web services need to scale to meet increasingly high performance
demands. 

Clusters of servers with load-balancing and failover
capabilities, proxies, and gateways are typically arranged in a way
that forms a service topology, which allows requests to be forwarded
from one server to the other as needed to decrease the overall
response time of a Web service call. 

Using intermediary servers to
improve scale requires REST Web service clients to send complete,
independent requests; that is, **to send requests that include all
data needed to be fulfilled so that the components in the intermediary
servers may forward, route, and load-balance without any state being
held locally in between requests**.

A complete, independent request doesn't require the server, while
processing the request, to retrieve any kind of application context
or state. 

A REST Web service application (or client) includes within
the HTTP headers and body of a request all of the parameters,
context, and data needed by the server-side component to generate
a response. 

Statelessness in this sense improves Web service
performance and simplifies the design and implementation of server-side
components because the absence of state on the server removes the
need to synchronize session data with an external application.

IBM gives a pagination example which is pretty good. A stateful
design would hit a deliverPage service that's been keeping track
of the page you're on, and delivers the next one. 

A stateless design
would populate prevPage, currPage, and nextPage data in the markup
(hidden input fields, JavaScript variables, data-attributes, and
so on), and then HTTP GET a newPage service using the nextPage
parameter from the markup to request a specific page.

This example illustrates the idea.
Take a look and note that we're never storing any page data
on the 'server' side. We merely take the current page value from
the DOM, and then when we get our new page, we update the DOM.
That's simple, stateless programming.
