import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Popular from "./Popular";
import Seasons from "./Seasons";
import Navigation from "./Navigation";
import Domestic from "./Domestic";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Domestic} />
          <Route exact path="/popular" component={Popular} />
          <Route path="/tvshows" component={Seasons} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
