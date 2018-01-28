import React, { Component, Fragment } from "react";

import Slideshow from "./Slideshow";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="header">A slideshow using react-transition-group</h1>
        <Slideshow />
      </Fragment>
    );
  }
}

export default App;
