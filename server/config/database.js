const mongoose = require("mongoose");
const config = require("./config");

const DB_URL = config.dbUrl.url;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("mongodb is Connected");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
