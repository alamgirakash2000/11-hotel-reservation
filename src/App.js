import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms/">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
