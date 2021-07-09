import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {

  return (
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
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
