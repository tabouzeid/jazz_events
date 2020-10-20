const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: 'user'
  },
  favorites: {
    type: Array,
    required: false,
    default: []
  },
  profileImg: {
    type: String,
    required: false,
    default: "none"
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;