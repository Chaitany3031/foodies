const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected DB");
    })
    .catch((err) => {
      console.log("Error DB",err);
    });
}

module.exports = connectDb;
