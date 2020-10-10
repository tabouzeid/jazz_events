const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // username: String,
    email: {
      type: String,
      required: true,
      unique: true
      // ,
      // validate: {
      //   isEmail: true
      // }
    },
    password: {
      type: String,
      required: true
    }
});

// from https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367
// userSchema.methods = {
//     checkPassword: function (inputPassword) {
//     return bcrypt.compareSync(inputPassword, this.password)
//   },
//     hashPassword: plainTextPassword => {
//     return bcrypt.hashSync(plainTextPassword, 10)
//     }
//   }

const User = mongoose.model("User", UserSchema);
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
// User.addHook("beforeCreate", user => {
//   user.password = bcrypt.hashSync(
//     user.password,
//     bcrypt.genSaltSync(10),
//     null
//   );
// });
module.exports = User;