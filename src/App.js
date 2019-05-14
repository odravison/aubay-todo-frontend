import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

import Table from './components/Table';
import Navbar from './components/Navbar';
import { getTaskPreBuiltList } from './virtual-persistent-data/data';

const headList = ['Name', 'Status', 'When'];

library.add(faStroopwafel, faEdit, faTrashAlt, faEye);

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        taskList: getTaskPreBuiltList()
      };

      this.removeTask = index => {
            
        this.setState({
          taskList: this.state.taskList.filter((task, innerIndex) => innerIndex !== index)
        });
      };

      this.editTask = index => {


      }

      this.detailTask = index => {
        
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Table
            dataList={this.state.taskList}
            headDataList={headList}
            removeTask={this.removeTask}
            editTask={this.editTask}
            detailTask={this.detailTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
