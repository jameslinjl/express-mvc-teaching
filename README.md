# express-mvc-teaching

By going through this lesson, you should:
* gain a better understanding of web frameworks
* learn what MVC is and how that maps to express, handlebars, etc.
* walk through some practical examples of express, handlebars, html, etc.

## Review

### Client-Server

The internet is a bunch of people and computers that are connected to one another. The communication on the internet primarily follows the client-server model.

**Servers** are computers that are actively listening for a request to come in, and will send a response back to the source of the request (optionally performing some actions before the request goes back).

**Clients** are either humans (using some sort of device) or computers that initiate a request to a **server**.

### HTTP

The primary protocol used for communication on the internet is **HTTP**. HTTP consists of a request and a response, which each have some unique characteristics that facilitate communication between the client and the server.

For example, all HTTP **requests** contain string called the path. This may help the server determine what content to send back to the client. A specific example of a path is /maps in www.google.com/maps, which tells google's servers to send back the content needed for Google Maps, as opposed to the path /flights in www.google.com/flights, which tells google's servers to send back the content needed for Google Flights.

Another example, all HTTP **responses** contain a status code. This may help the client determine what happened on the server's side of things and the client can act accordingly. A specific example of an HTTP status code is "200 OK", which tells the client that request sent was processed in an OK way and so the client can proceed as expected, as opposed to an HTTP status code of "404 Not Found", which tells the client that request sent hit something that was missing. In the latter case, the client (if it's a device for a human), might show a page telling the human that what they asked for was not found.

### HTML

**HTML** is a markup language that web browsers know how to process display graphically. It has all the basic features for simple web interaction between a human and the internet.

Some examples are displaying text, images, and lists. HTML also allows for text input, button pressing, and form submission to send data from the browser (our client) to a server.
