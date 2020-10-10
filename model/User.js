// const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
});
// const User = mongoose.model("User", UserSchema);
// User.prototype.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
module.exports = User;