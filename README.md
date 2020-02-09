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

### DOM

The **DOM** is model of a webpage which determines what a browser should display graphically. If you use a browser's debugging tools and "Inspect" a web page, you will find that the structure greatly resembles **HTML**. On a page that was constructed solely by a server's response with pure HTML, the DOM and the HTML response should be pretty much the same.

### JavaScript

**JavaScript** is a programming language that browsers know how to run.

*In the beginning*, JS was only executable in browsers and primarily functioned to make dynamic changes to the **DOM**. This allowed for web pages to have more dynamic behavior.

*Now*, JS is widely used across many parts of the industry. It can run as a server-side language using **Node.js** and has also has a large community expanding libraries and frameworks that use JS in the browser.

:warning: We will be using JavaScript solely as a **server-side** language during the early part of this class. JavaScript's ability to run in the browser will come into play later on in the class.

## Web Frameworks

You can build a web application using pretty much any mature (server-side) programming language. All you need to do is build a program that can:
1) listen for requests on a network
2) receive and process the text of an HTTP request (likely as a string)
3) perform any other logic necessary (e.g. write some data to disk)
4) construct an HTTP response (again, just a string, as long as it conforms to the protocol's response)
5) send the request back to the client over the network

In fact, one of my assignments in school (http://www.cs.columbia.edu/~jae/3157/) was to build a program doing exactly the above "from scratch" in C. 

:warning: **DON'T DO THE ABOVE FOR THIS CLASS!**

**Web Frameworks** are libraries, modules, APIs, or packages (depending on what other word you want to call "code that someone else wrote and that you can/should use") that simplify steps 1, 2, 4, and 5 for the web programmer. The third step is typically referred to as your **business logic**, which is where your code is actually performing the "meaningful" parts of whatever you are building.

There are many, many web frameworks out in the world that have been build across almost every programming language out there. Web frameworks vary greatly in their size and complexity, and each has their pros and cons. Some web frameworks come with lots of tools out-of-the-box, but can be confusing to use or feel too magical. Other web frameworks are very barebones and are easier to understand, but require more work on the programmers parts to either build additional tooling or add plugins.

The web framework we will show examples with in this class is **Express**, which is in JavaScript (Node.js, since it runs as a server). Express is on the barebones side, which I find beneficial for teaching purposes.

:warning: You can feel free to choose a different programming language and web framework for this class. However, teaching staff may be limited in our ability to support you depending on your choice. In addition to JS, I have experience in Python (using the Flask web framework). Jesse has experience in Java (using the Spring web framework).

## MVC

**MVC** stands for **Model-View-Controller**, which is a common way to understand different components of web tooling.

### Model

The **Model** is our data that we are interacting with (typically creating, reading, updating, and deleting it: CRUD). This data might be accessed via a database, a RESTful API like our Todo API, or stored in-memory.

### View

The **View** is how our application displays information to our client along with the tools that are used to generate this display. If our application is directly interacting with a browser, then our view is typically HTML. Sometimes, HTML will need to be dynamically generated (e.g. showing a list of all users from a database), so additional tools are needed to perform some logic. This could be a templating engine, like Handlebars.

Once the view is generated and sent to the user, then the user can interact with it.

### Controller

The **Controller** is the component that receives user input from the view and allows for some appropriate actions to be taken. This can involve making changes to the **Model** and generating a new **View** according to what has changed.
