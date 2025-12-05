let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

//user collection
let user = mongoose.model("User", userSchema);
module.exports = user;
