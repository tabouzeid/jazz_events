// Routes
// =============================================================
const Event = require('../controller/eventController');

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
    app.post('/api/event', (req, res) => {
        Event.create(req, res);
    });
    
    // Update an existing event with the id specified in the 'id' param
    app.put('/api/event/:id', (req, res) => {
        Event.update(req, res);
    });

    // Delete an existing event with the id specified in the 'id' param
    app.delete('/api/event/:id', (req, res) => {
        Event.remove(req, res);
    });
};
