import React, { Component } from "react";
import "../LineApp.css";

class Header extends Component {
  render() {
    return (
      <header className="page-header z-depth-3">
        <div className="container">
          <h1>
            Welcome to <strong>LineApp</strong>
          </h1>
          <h5>Add your tasks and todos to get organized.</h5>
        </div>
      </header>
    );
  }
}

export default Header;
