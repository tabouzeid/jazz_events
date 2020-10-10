const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    venueName: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    eventName: {
        type: String,
        trim: true,
    },
    cover: {
        type: Number,
    },
    sets: [
        {
            startTime: {
                //type: Date,
                type: String,
                required: false,
            },
            artistList: {
                type: String,
                required: false,
            } // min of 1 non empty (required )
        }
    ]
}
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;