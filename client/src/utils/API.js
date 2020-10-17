import axios from "axios";

export default {
  // Find user for authentication - username must be a unique value
  getUser: function (userData) {
    console.log("The query URL = /api/user/" + userData.email);
    return axios.get("/api/user/" + userData.email);
  },
  login: function (userData) {
    console.log("The query URL = /api/user/" + userData.email);
    return axios.post("/api/login", userData);
  },
  // Saves a new user to the database
  saveUser: function (userInfo) {
    return axios.post("/api/signup", userInfo);
  },
  // Deletes the user with the given username
  deleteUser: function (userName) {
    return axios.delete("/api/user/" + userName);
  },
  saveEvent: function (savedEvent) {
    console.log("In API.js saveEvent");
    return axios.post("/api/event", savedEvent);
  },
  logout: function () {
    console.log("loging out");
    return axios.post("/logout");
  }
};
