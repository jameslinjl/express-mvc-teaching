const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home");
});

const TODO_API_URL = "https://hunter-todo-api.herokuapp.com";

app.get("/users", function(req, res) {
  // we are using axios to make a request to our API
  // our model is now composed of our API (which we are only reading from in this example)
  axios.get(TODO_API_URL + "/user").then(function(response) {
    // we pass our response data to our view engine, which will template it into our HTML view
    res.render("user-list", { users: response.data });
  });
});

app.listen(3000);
