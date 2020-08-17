import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>HomePage</h1>
      </div>
    );
  }
}
export default withRouter(Home);
