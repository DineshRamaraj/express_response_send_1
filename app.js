const express = require("express");

const app = express();

app.get("/", (request, response) => {
  //   response.send("Express Js");
  response.send("Express JS");
});

module.exports = app;
