import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import Table from './components/Table';
import Navbar from './components/Navbar';
import { getTaskPreBuiltList } from './virtual-persistent-data/data';

const headList = ['Name', 'Status', 'When'];

library.add(faStroopwafel);

class App extends Component {
  state = {
    taskList: getTaskPreBuiltList()
  };

  removeTask = index => {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter((task, innerIndex) => innerIndex !== index)
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Table
            dataList={this.state.taskList}
            headDataList={headList}
            removeTask={this.removeTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
