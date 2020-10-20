const passport = require("../config/passport");
const userController = require("../controller/userController");
const AccessMiddleware = require("../config/middleware/isAuthenticated");

require("dotenv").config();

module.exports = function (app) {
  app.post('/api/login', (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({ success: false, msg: 'Invalid credentials' });
    }

    // Authenticate the user using the credentials provided
    passport.authenticate('local', { session: true }, function (err, user) {
      if (err) {
        res.status(400).json({ success: false, msg: 'Invalid credentials' });
      }

      // When using passport with callback, we have to manually call req.login to set the Cookie
      req.login(user, async () => {
        res.json({ success: true, user })
      })
    })(req, res, next)
  })

  app.post("/api/signup", function (req, res) {
    userController.signup(req, res);
  });

  app.get('/authenticated-only', AccessMiddleware.hasAccess, (req, res) => {
    res.json({ success: true, message: 'You have auth access!' })
  })

  app.get('/admin-only', AccessMiddleware.hasAdminAccess, (req, res) => {
    res.json({ success: true, message: 'You have admin access!' })
  })

  app.get("/logout", function (req, res) {
    req.logout();
    res.end();
  });
}