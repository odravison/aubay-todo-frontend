import React, { Component } from 'react';
import './Navbar.css';
import CreateUpdateTaskModalForm from './CreateUpdateTaskForm';

class Navbar extends Component {
  constructor(props) {
    super(props);


    this.createNewTask = this.props.createNewTask

    this.state = {
      show: true
    }

    this.showCreateUpdateModal = () => {
      this.refs.modal.open();
    };

  }

  render() {
    return (
      <header className="Navbar">
        <span className="logo-name">
          ToDo React App
        </span>
        <span className="menu-buttons">
          <CreateUpdateTaskModalForm ref = "modal" submitForm={this.createNewTask} />
          <button className="accent-button" onClick={this.showCreateUpdateModal}>New Task</button>
        </span>
      </header>
    );
  }
}

export default Navbar;
