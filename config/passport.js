const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const LocalStrategy = require("passport-local").Strategy;

//change to mongoDB, remove sequelize!!!
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ email : id })
  .then((response) => {
    done(null, response);
  })
  .catch((err) => done(err, null));
});

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    /**
     * This is the Auth handler. We check for a valid user phone and authenticate if found
     */
    async function (req, email, password, done) {
      const user = await User.findOne({email: email})

      // Check for valid user
      if (!user) {
        return done('Invalid credentials', false)
      }
      // Check for valid auth
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (!passwordMatch) {
        return done('Invalid credentials', false)
      }

      // All is well, return successful user
      return done(null, user)
    }
  )
);



// Exporting our configured passport
module.exports = passport;
