var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// the 2 lines of code here configures express to use handlebars library as the view engine for the app
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  // express-handlebars is programmed to look for files titled the same as the string passed to render
  // and create HTML based on the file to send to the client.
  res.render("home");
});

app.listen(3000);
