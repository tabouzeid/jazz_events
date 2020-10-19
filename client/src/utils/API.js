import axios from "axios";

export default {
  // Find user for authentication - username must be a unique value
  getUser: function (userData) {
    return axios.get("/api/user/" + userData.email);
  },
  login: function (userData) {
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
    return axios.post("/api/event", savedEvent);
  },
  logout: function () {
    return axios.post("/logout");
  }
};
