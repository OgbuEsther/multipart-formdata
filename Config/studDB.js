const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/PROFILE");
mongoose.connection
  .on("open", () => {
    console.log(`database is connected`);
  })
  .once("error", () => {
    console.log(`failed to connect to database`);
  });
