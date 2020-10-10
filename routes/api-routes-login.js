const express = require("express");
const router = express.Router();
const axios = require("axios");
const { transcode } = require("buffer");
var path = require("path");
const passport = require("../config/passport");
const bcrypt = require("bcryptjs");
// var User = require('../model/User')
const User = require('../controller/userController');
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

  app.post("/api/signup", function (req, res) {
    User.findOne({email: req.body.email}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
        .then(() => {
          res.send("User Created");
        })
        .catch(err => {
          console.log(err);
        })
      }
    })
    // User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    //   })
    //     .then(() => {
    //       res.sendFile(path.join(__dirname, "../public/questionnaire.html"));
    //     })
    //     .catch(err => {
    //       res.status(401).json(err);
    //     });
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