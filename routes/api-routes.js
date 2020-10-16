// Routes
// =============================================================
const Event = require('../controller/eventController');
const User = require('../controller/userController');
const AccessMiddleware = require("../config/middleware/isAuthenticated");
const bcrypt = require("bcryptjs");

module.exports = function(app) {
    // Retrieves all events with a date field of today or later
    app.get('/api/event', (req, res) => {
        let date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        console.log(date);
        Event.findAllWhere(req, res, {date: {$gte: date}});
    });

    // Retrieves all events with a date field of 'startdate' or later
    app.get('/api/event/:startdate', (req, res) => {
        Event.findAllWhere(req, res, {date: {$gte: Date.parse(req.params.startdate)}});
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
        userController.updateFavorites(req,res);
    });

    app.get('/api/user/', AccessMiddleware.hasAccess, (req, res) => {
        User.findById(req, res);
    });

    app.put('/api/user/', AccessMiddleware.hasAccess, async (req, res) => {
        let updateFields = {};
        if (req.body.password){
            const passwordMatch = await bcrypt.compare(req.body.password, req.user.password)
            if (passwordMatch){
                User.update(req, res);
            } else {
                res.status(421).json({msg: "password doesn't match"})
            }
        }
        //check if password is being provided in the request (i.e. they want to change password), then
        //check if current password matches user password (using bcrypt (in userController))
        //if it fails, break and respond 421 and flag "no match", else  User.update(req, res);
    })
};
