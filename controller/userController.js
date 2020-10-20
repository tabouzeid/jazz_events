const User = require("../model/User");
const bcrypt = require("bcryptjs");

// ================multer====================

const multer = require('multer');
// const uuidv4 = require('uuid/v4');
// // router = express.Router();

// const DIR = './client/public/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
// // User model
// let User = require('../models/User');

// router.post('/user', upload.single('profileImg'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const user = new User({
//         // _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: url + '/public/' + req.file.filename
//     });
//     user.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//             userCreated: {
//                 _id: result._id,
//                 profileImg: result.profileImg
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })

// ==================end of multer=================
module.exports = {
  findById: function (req, res) {
    User
      .findById(req.user._id)
      .then(dbModel => res.json({ "email": dbModel.email, "name": dbModel.name, "profileImg": dbModel.profileImg }))
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
  update: async function (req, res) {

    let updatedFields = {};
    if (req.body.name) {
      updatedFields.name = req.body.name;
    }
    if (req.body.email) {
      updatedFields.email = req.body.email;
    }
    if (req.body.password) {
      updatedFields.password = await bcrypt.hash(req.body.password, 10);
    }
    // if (req.body.profileImg) {
    //   console.log(req.file.filename);
    //   updatedFields.profileImg = '/' + req.file.filename;
    // }
    console.log("going to update ", req.user._id, "for fileds ", updatedFields)
    User
      .findOneAndUpdate({ _id: req.user._id }, updatedFields)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({ msg: "could not update profile info" }));
  },
  updatePicture: function (req, res) {
    const DIR = '../client/public/';
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, DIR);
      },
      filename: (req, file, cb) => {
        const fileName = file.File.name.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
      }
    });
    User
      .findOneAndUpdate({ _id: req.user._id }, { $set: { 'profileImg': "/" + req.file.filename } })
      .then(data => {
        console.log(req.file.filename);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },


  getFavorites: function (req, res) {
    User
      .findById(req.user._id)
      .then(dbModel => res.json(dbModel.favorites))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  updateFavorites: function (req, res) {
    User
      .findOneAndUpdate({ _id: req.user._id }, { $set: { 'favorites': req.body } })
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
                  name: req.body.name,
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