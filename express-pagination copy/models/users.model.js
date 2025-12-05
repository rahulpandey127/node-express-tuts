import mongoose from "mongoose";
import pagination from "mongoose-paginate-v2";

let userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  city: { type: String },
  createdAt: { type: Date },
});

userSchema.plugin(pagination);
export default mongoose.model("Users", userSchema);
