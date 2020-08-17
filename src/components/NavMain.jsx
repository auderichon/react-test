import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

class NavMain extends React.Component {
  render() {
    return (
      <div className="container-nav">
        <nav className="navbar">
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/temperature">Temperature</Link>
            <Link to="/customize-image">Customize Image</Link>
          </BrowserRouter>
        </nav>
      </div>
    );
  }
}

export default NavMain;
