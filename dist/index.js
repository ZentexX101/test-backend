"use strict";

var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.get("/api/message", function (req, res) {
  res.json({
    message: "Welcome to My React App from Express Backend!"
  });
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});