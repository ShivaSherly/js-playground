const mongoose = require("mongoose");

const UserModel = mongoose.model("User", {
  userDetails: {
    userId: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: false,
    },
  },
});

module.exports = UserModel;
