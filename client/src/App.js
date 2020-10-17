import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NaviBar from './components/NaviBar';
import EventsPage from './components/EventsPage';
import FavoritesPage from './components/FavoritesPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserProfilePage from './components/UserProfilePage';
import AddEvent from './pages/AddEvent';

function App() {
  return (
    <Router>
      <NaviBar />
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
  );
}

export default App;
