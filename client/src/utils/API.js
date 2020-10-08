import axios from "axios"

export default {
   
    // Saves an Event to the database
    saveEvent: function (savedEvent) {
        return axios.post("/api/event", savedEvent);
    }

}