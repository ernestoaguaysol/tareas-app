import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import TaskAdd from "./components/TaskAdd";
import {todo} from "./todo.json";

class App extends Component {
  constructor(){
    super();
    this.state = { todo }
    this.addTask = this.addTask.bind(this);
  }
  
  addTask(task){
    this.setState({
      todo: [...this.state.todo, task]
    })
  }
  
  render() {
    const todo = this.state.todo.map((task, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p>{task.responsible}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navbar contador={ this.state.todo.length } />


        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskAdd onAddTask={this.addTask}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                { todo }
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
  }
}

export default App;
