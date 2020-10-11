import axios from "axios";

export default {
  LogIn: (email, password) => {
    return axios.post('/api/login', {
      email: email,
      password: password
    })
  },
  isLoggedIn: () => {
    return axios.get('/auth/success')
  },
  getUser: function(userData) {
    console.log("The query URL = /api/user/" + userData.userId);
    return axios.get("/api/user/" + userData.userId);
  },
  saveUser: function(userInfo) {
    return axios.post("/api/signup", userInfo);
  },
  updateUser: function(userId) {
    return axios.put("/api/user/" + userId);
  },
  deleteUser: function(userId) {
    return axios.delete("/api/user/" + userId);
  },
  Logout: () => axios.get('/logout'),

  // Saves an Event to the database
  saveEvent: function (savedEvent) {
    console.log("In API.js saveEvent");
    return axios.post("/api/event", savedEvent);
}
};
