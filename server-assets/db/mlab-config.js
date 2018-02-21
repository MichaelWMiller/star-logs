var mongoose = require("mongoose");
var connectionString = "mongodb://test:test@ds044907.mlab.com:44907/delete-me";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to Mlab baby");
});
