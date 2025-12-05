import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: { type: String },
  mobile: { type: String },
  email: { type: String },
  password: { type: String },
  message: { type: String },
});

let user = mongoose.model("User", userSchema);
export default user;