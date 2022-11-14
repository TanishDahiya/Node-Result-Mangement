const express = require("express");
const app = express();
const port = 8005;

// database
require("./db/connection");
const Result = require("./models/Result");

// views
app.set("view engine", "ejs");
app.set("views", "./views");

// middleware
app.use(express.urlencoded({ extended: true }));

// assets
app.use(express.static("assets"));

// routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error while running Result Management App at port : ", port);
    console.log(err);
    return;
  }
  console.log("Result Management App is running on port : ", port);
});
