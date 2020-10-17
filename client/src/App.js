import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NaviBar from './components/NaviBar';
import EventsPage from './components/EventsPage';
import ArtistForm from './components/ArtistForm';
import FavoritesPage from './components/FavoritesPage';
import LogInPage from './components/LogInPage';
import SignInPage from './components/SignInPage';
import UserProfilePage from './components/UserProfilePage';
import AddEvent from './pages/AddEvent';
import UserContext from "../src/utils/UserContext";
// import API from "./utils/API";
import axios from 'axios'

function App() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  // function changeState(role) {
  //   if (role === "admin") {
  //     roles.admin = true;
  //     roles.user = false;
  //   }
  //   else if (role === "user") {
  //     roles.user = true;
  //     roles.admin = false;
  //   } else {
  //     roles.admin = false;
  //     roles.user = false;
  //   }
  //   setRoles({
  //     ...roles,
  //     role
  //   });
  // }
  // useEffect(() => {
  //   API.getRole((res) => {
  //     setRoles(res);
  //   });
  // }, []);

  useEffect(() => {
    axios.get('/admin-only')
      .then((res) => {
        console.log(res);
        setAdmin(res.data.success)
        console.log(admin, user);
      })
      .catch((err) => {
        console.log("error ", err)
        setAdmin(false);
      });
    axios.get('/authenticated-only')
      .then((res) => {
        console.log(res);
        setUser(res.data.success)
        console.log(admin, user);
      })
      .catch((err) => {
        console.log("error ", err);
        setUser(false);
      });
    console.log(admin, user);
  }, []);
  console.log(admin, user);
  return (
    <UserContext.Provider value={{ admin, user }}>

      <Router>
        <NaviBar />
        <Switch>
          <Route exact path={"/"}>
            <EventsPage />
          </Route>
          <Route exact path={"/addartist"}>
            <ArtistForm />
          </Route>
          <Route exact path={"/addevent"}>
            <AddEvent />
          </Route>
          <Route exact path={"/favorites"}>
            <FavoritesPage />
          </Route>
          <Route exact path={"/login"}>
            <LogInPage />
          </Route>
          <Route exact path={"/signin"}>
            <SignInPage />
          </Route>
          <Route exact path={"/userprofile"}>
            <UserProfilePage />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
