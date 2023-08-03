const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "USER",
    enum: ["ADMIN", "AUTHOR", "USER"],
  }
}, { timestamps: true, strict: true});

userSchema.plugin(mongoosePaginate);

const User = model("User", userSchema);

module.exports = User;
