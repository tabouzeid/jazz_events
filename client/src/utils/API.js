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
  // Not sure if this is needed, since there is no delete
  // button on the UserProfilePage at the moment
  deleteUser: function (userName) {
    return axios.delete("/api/user/" + userName);
  },
  // get user role for useContext
  // getUserRole: function () {
  //   return axios.get('/authenticated-only')
  //   .then((res) => {
  //       console.log("pass ", res)
  //       res.json({success: true})
  //       // setIsAuthenticated(response.data.success);
  //   })
  //   .catch((err) => {
  //       console.log("catch ", err)
  //       // setIsAuthenticated(false);
  //   });
  // },
  // getAdminRole: function () {
  //   return axios.get('/admin-only')
  //   .then((response) => {
  //       console.log("pass ", response)
  //       response.json({success: true})
  //       // setIsAuthenticated(response.data.success);
  //   })
  //   .catch((response) => {
  //       console.log("catch ", response)
  //       // setIsAuthenticated(false);
  //   });
  // },
  // Saves an Event to the database
  saveEvent: function (savedEvent) {
    console.log("In API.js saveEvent");
    return axios.post("/api/event", savedEvent);
  }
};
