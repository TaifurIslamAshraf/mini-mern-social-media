const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//database
require("./config/database");
mongoose.set("strictQuery", true);

//midelware
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//routers
app.use("/posts", require("./routers/posts.router"));

//router error
app.use((req, res, next) => {
  res.status(404).send({
    message: "404 page not found",
  });
  next();
});

//server error
app.use((err, req, res, next) => {
  res.status(500).send({
    message: "somthing broke !",
    error: err.message,
  });
  next();
});

module.exports = app;
