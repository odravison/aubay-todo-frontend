import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <span className="logo-name">
          TO-DO App
        </span>
        <span className="menu-buttons">
          <button className="accent-button">New Task</button>
        </span>
      </header>
    );
  }
}

export default Navbar;
