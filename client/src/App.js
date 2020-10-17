import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NaviBar from './components/NaviBar';
import EventsPage from './components/EventsPage';
import FavoritesPage from './components/FavoritesPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserProfilePage from './components/UserProfilePage';
import AddEvent from './pages/AddEvent';
import UserContext from "../src/utils/UserContext";
import axios from 'axios'

function App() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);

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
        <NaviBar/>
        <Switch>
          <Route exact path={"/"}>
            <EventsPage />
          </Route>
          <Route exact path={"/addevent"}>
            <AddEvent />
          </Route>
          <Route exact path={"/favorites"}>
            <FavoritesPage />
          </Route>
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
          <Route exact path={"/signup"}>
          <SignupPage />
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
