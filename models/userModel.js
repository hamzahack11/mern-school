const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "user"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role == "user" || this.role == "admin") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: "true",
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    website: {
      type: String,
    },
    CNIC: {
      type: Number,
      required: [true, "CNIC number is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
