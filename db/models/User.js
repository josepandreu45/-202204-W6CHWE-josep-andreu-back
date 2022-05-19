const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String, required: true },
});

const User = model("User", UserSchema, "users");

module.exports = User;
