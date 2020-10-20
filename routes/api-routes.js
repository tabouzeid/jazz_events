// Routes
// =============================================================
const Event = require('../controller/eventController');
const User = require('../controller/userController');
const AccessMiddleware = require("../config/middleware/isAuthenticated");
const bcrypt = require("bcryptjs");
const userController = require('../controller/userController');
const multer = require('multer');
const uuid = require('uuid');

module.exports = function (app) {
    // Retrieves all events with a date field of today or later
    app.get('/api/event', (req, res) => {
        let date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        Event.findAllWhere(req, res, { date: { $gte: date } });
    });

    // Retrieves all events with a date field of 'startdate' or later
    app.get('/api/event/:startdate', (req, res) => {
        Event.findAllWhere(req, res, { date: { $gte: Date.parse(req.params.startdate) } });
    });

    // Create a new event
    // admin check for this route
    app.post('/api/event', AccessMiddleware.hasAdminAccess, (req, res) => {
        console.log("api-routes.js, api.post");
        Event.create(req, res)
    });

    // Update an existing event with the id specified in the 'id' param
    // admin check for this route
    app.put('/api/event/:id', AccessMiddleware.hasAdminAccess, (req, res) => {
        Event.update(req, res);
    });

    // Delete an existing event with the id specified in the 'id' param
    // admin check for this route
    app.delete('/api/event/:id', AccessMiddleware.hasAdminAccess, (req, res) => {
        Event.remove(req, res);
    });

    // endpoint of all favorites of user (result is array of objects of favorite events)
    app.get('/api/favorites', AccessMiddleware.hasAccess, (req, res) => {
        userController.getFavorites(req, res);
    });
    // create endpoint for user for update user with array of favorites
    app.put("/api/favorites", AccessMiddleware.hasAccess, function (req, res) {
        userController.updateFavorites(req, res);
    });

    app.get('/api/user/', AccessMiddleware.hasAccess, (req, res) => {
        User.findById(req, res);
    });
    
    const DIR = './client/public/';
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DIR);
        },
        filename: (req, file, cb) => {
            const fileName = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, uuid.v4() + '-' + fileName)
        }
    });
    var upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }
    });

    app.put('/api/userPicture/', AccessMiddleware.hasAccess, upload.single('profileImg'), async (req, res) => {
        userController.updatePicture(req, res);
    });

    app.put('/api/user/', AccessMiddleware.hasAccess, async (req, res) => {
        if (req.body.currentPassword) {
            const passwordMatch = await bcrypt.compare(req.body.currentPassword, req.user.password)
            if (!passwordMatch) {
                res.status(421).json({ msg: "password doesn't match" })
            }
        }
        userController.update(req, res);
    });
    
};
