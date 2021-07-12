import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BookTrip from "./pages/BookTrip";
import MyTrips from "./pages/MyTrips";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Login from "./pages/Login";
import TripContext from "./utils/TripContext.js"
import UseTripModel from "./utils/useTripModel"

function App() {
  return (
    <TripContext.Provider value={UseTripModel()}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/my-trips">
              <MyTrips />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/book-trip">
              <BookTrip />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>

          </Switch>
        </div>
      </Router>
    </TripContext.Provider>
  );
}


export default App;