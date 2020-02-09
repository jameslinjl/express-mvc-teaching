// import the module "express" and store the exported module value in a constant called express
const express = require("express");
// the exported module express is callable, and provides the base of our application as the return value
const app = express();

// express facilitates the handling of HTTP requests, attaching a function to be called with an HTTP
// method and a path. By accepting and handling input here, express also acts as our "Controller".
// The function takes two parameters: request and response. The request parameter holds information
// about the HTTP request and the response parameter holds information about the HTTP response that
// we want to send back to the client.
app.get("/", function(req, res) {
  // The HTTP response here is being changed to send the content "Hello World" back to the client
  // This text (which isn't even HTML) is effectively our "View" right now
  res.send("Hello World");
});

// This final line tells the app to listen on the local network on port 3000
app.listen(3000);
