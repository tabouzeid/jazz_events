import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NaviBar from './components/NaviBar';
import EventsPage from './components/EventsPage';
import ArtistForm from './components/ArtistForm';
import EventForm from './components/EventForm';
import FavoritesPage from './components/FavoritesPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
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
        {/* maybe will be removed from routes */}
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
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/userprofile"}>
          <UserProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
