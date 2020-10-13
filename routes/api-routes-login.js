const express = require("express");
const router = express.Router();
const axios = require("axios");
const { transcode } = require("buffer");
var path = require("path");
const passport = require("../config/passport");
const userController = require("../controller/userController");
const PRODUCTION = process.env.PRODUCTION;
require("dotenv").config();

module.exports = function (app) {
  // app.post("/api/login", passport.authenticate("local"), (req, res) => {
  //   console.log('we hit this route')
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  app.post('/api/login', (req, res, next) => {
    console.log("hello");
    const { email, password } = req.body
    if (!email || !password) {
      return errorResponse(res, 'Invalid credentials')
    }
  
    // Authenticate the user using the credentials provided
    passport.authenticate('local', { session: true }, function (err, user) {
      if (err) {
        return errorResponse(res, 'Invalid credentials')
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

  // app.get("/api/users", function(req, res) {

  //   db.User.findAll({ 
  //   }).then(function(data) {
  //     var hbsObject = {
  //       users: [data]
  //     };
  //     console.log(hbsObject);
  //     res.json(data);

  //   }).catch(err => {
  //     console.log(err);
  //   });

  // });

  // app.get("/api/users/:id", function (req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(data) {
  //     var hbsObject = {
  //       users: data
  //     };
  //     console.log(hbsObject);
  //     res.render("index", hbsObject);

  //   }).catch(err => {
  //     console.log(err);
  //   });
  // });

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

  // app.get("/logout", function (req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });
}