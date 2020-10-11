const express = require("express");
// const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
const userController = require("../controller/userController");

module.exports = (app) => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log('we hit this route')
    res.json(req.user);
  });

  app.post("/api/signup", (req, res) => {
    userController.signup(req, res);
  });
  app.get("/auth/success", isAuthenticated, (req, res) => {
    console.log("The user object is ", req.user)
    if (req.user) {
        if (Array.isArray(req.user)) {
            console.log("Array!")
            res.json({
                success: true,
                message: "User has successfully authenticated",
                user: {
                  id: req.user[0].id
                }
            });
        } else {
            console.log("Object!")
            res.json({
                success: true,
                message: "User has successfully authenticated",
                user: {
                  id: req.user.id
                }
            });
        }
    } else {
        res.json({
            success: false,
            message: "No user authenticated"
        })
    }
});
  app.get("/api/users", isAuthenticated, (req, res) => {
    if (req.user) {
      userController.findAll({}).then(data => {
        res.json(data);
      });
    }
  });
  app.get("/api/users/:id", isAuthenticated, (req, res) => {
    if (req.user) {
      userController.findById(req, res);
    }
  });
  app.put("/api/users/:id", isAuthenticated, (req, res) => {
    if (req.user) {
    userController.update(req, res);
    }
  });
  app.delete("/api/users/:id", isAuthenticated, (req, res) => {
    if (req.user) {
    userController.remove(req, res);
    }
  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
}