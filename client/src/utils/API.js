import axios from "axios"

export default {
   
    // Saves an Event to the database
    saveEvent: function (savedEvent) {
        console.log("In API.js saveEvent");
        return axios.post("/api/event", savedEvent);
    }

}