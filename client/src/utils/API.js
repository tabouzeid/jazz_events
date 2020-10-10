import axios from "axios";

export default {
// Find user for authentication - username must be a unique value
  getUser: function(userData) {
    console.log("The query URL = /api/user/" + userData.username);
    return axios.get("/api/user/" + userData.username);
  },
  // Saves a new user to the database
  saveUser: function(userInfo) {
    return axios.post("/api/signup", userInfo);
  },
    // Deletes the user with the given username
    // Not sure if this is needed, since there is no delete
    // button on the UserProfilePage at the moment
  deleteUser: function(userName) {
    return axios.delete("/api/user/" + userName);
  }
};