const User = require("../model/User");
const bcrypt = require("bcryptjs");

module.exports = {
  findById: function (req, res) {
    User
      .findById(req.user._id)
      .then(dbModel => res.json({"email":dbModel.email, "name":dbModel.name}))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: async function(req, res) {
    let updatedFields = {};
    if(req.body.name) {
      updatedFields.name = req.body.name;
    }
    if(req.body.email) {
      updatedFields.email = req.body.email;
    }
    if(req.body.password) {
      updatedFields.password = await bcrypt.hash(req.body.password, 10);
    }
    console.log("going to update ",  req.user._id, "for fileds ", updatedFields)
    User
      .findOneAndUpdate({ _id: req.user._id }, updatedFields)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({msg: "could not update profile info"}));
  },
  getFavorites: function(req, res) {
    User
      .findById(req.user._id)
      .then(dbModel => res.json(dbModel.favorites))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  updateFavorites: function(req, res) {
    User
      .findOneAndUpdate(  { _id: req.user._id}, { $set: { 'favorites' : req.body }})
      .then(data => {
        this.getFavorites(req, res);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  signup: function (req, res) {
    // console.log("hello", req);
    User
      .findOne({ email: req.body.email })
        .then(doc => {
          if (doc) {
            res.send("User Already Exists");
          } else {
            bcrypt.hash(req.body.password, 10)
            .then(
              hashedPassword => {
                User.create({
                  username: req.body.username,
                  email: req.body.email,
                  password: hashedPassword,
                })
                  .then(() => {
                    res.send("User Created");
                  })
                  .catch(err => {
                    console.log(err);
                  })
              }
            )
          }
        })
        .catch(err => {
          console.log(err);
          res.status(422).json(err)
        });
  }
};