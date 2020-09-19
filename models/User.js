import mongoose from "mongoose";
import passportMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avartarUrl: String,
  facebookId: Number,
  githubId: Number,
});

UserSchema.plugin(passportMongoose, { usernameField: "email" });
const model = mongoose.model("User", UserSchema);

export default model;
