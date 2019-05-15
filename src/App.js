import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

import Table from './components/Table';
import Navbar from './components/Navbar';
import { getTaskPreBuiltList } from './virtual-persistent-data/data';
import CreateUpdateTaskForm from './components/CreateUpdateTaskForm';

const headList = ['Name', 'Status', 'When'];

library.add(faStroopwafel, faEdit, faTrashAlt, faEye);

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        taskList: getTaskPreBuiltList()
      };

      this.addTask = task => {

        if (task.index){
          
          // This means that is a edit event, and not a add
          const updatedTasks = this.state.taskList;
          updatedTasks[task.index] = task;
          this.setState({ taskList: updatedTasks});

        } else {
          // ES6 spread Operator.
          // Updating the taskList with the new Task and the old list
          this.setState({ taskList: [...this.state.taskList, task] });
        }
      };

      this.removeTask = index => {
            
        this.setState({
          taskList: this.state.taskList.filter((task, innerIndex) => innerIndex !== index)
        });
      };

      this.detailTask = index => {
        
      };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container striped-table">
          <Table
            dataList={this.state.taskList}
            headDataList={headList}
            removeTask={this.removeTask}
            editTask={this.editTask}
            detailTask={this.detailTask}
          />
          <CreateUpdateTaskForm submitForm={this.addTask}/>
        </div>
      </div>
    );
  }
}

export default App;
