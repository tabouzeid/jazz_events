const passport = require("../config/passport");
const userController = require("../controller/userController");
const AccessMiddleware = require("../config/middleware/isAuthenticated");

require("dotenv").config();

module.exports = function (app) {
  app.post('/api/login', (req, res, next) => {
    console.log("hello");
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
    console.log("authenticated-only");
    res.json({ success: true, message: 'You have auth access!' })
  })

  app.get('/admin-only', AccessMiddleware.hasAdminAccess, (req, res) => {
    console.log("admin-only");
    res.json({ success: true, message: 'You have admin access!' })
  })

  // endpoint of all favorites of user (result is array of objects of favorite events)
  app.get('/api/favorites', AccessMiddleware.hasAccess, (req, res) => {
    userController.findById(req, res);
  });
    // create endpoint for user for update user with array of favorites
  app.post("/api/usersaddfavorites/:id", AccessMiddleware.hasAccess, function (req, res) {
    userController.update(req,res);
    //   {
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function(data) {
    //   var hbsObject = {
    //     favorites: data
    //   };
    //   console.log(hbsObject);
    //   res.json({ success: true, message: 'Your event was saved to favorites' });

    // }).catch(err => {
    //   console.log(err);
    // });
  });

  // app.get("/api/user_data", (req, res) => {
  //   if (!req.user) {
  //     res.json({});
  //   } else {
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

  app.get("/logout", function (req, res) {
    req.logout();
    res.end();
  });


}