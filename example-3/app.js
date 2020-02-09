var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// we now have data! our model here is just a single number that we can interact with directly using JS
var buttonClickCount = 0;

// we now have 1 route with 2 methods (GET and POST)
// as our controller, express helps us to control what logic should happen with each method
app.get("/", function(req, res) {
  // you will notice that we now pass some data to our render function so that our view will be produced
  // with the correct count
  res.render("home", { count: buttonClickCount });
});

app.post("/", function(req, res) {
  buttonClickCount++;
  res.render("home", { count: buttonClickCount });
});

app.listen(3000);
