import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import {todo} from "./todo.json";

class App extends Component {
  constructor(){
    super();
    this.state = { todo }
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
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="row mt-4">
            { todo }
          </div>
        </div>
      </div>
        
    );
  }
}

export default App;
