import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
  followers: {
    type: Array,
  },
  requestsReceived: {
    type: Array,
    default: [],
  },
  requestSent: {
    type: Array,
    default: [],
  },
});

const User = model("User", userSchema);
export default User;
