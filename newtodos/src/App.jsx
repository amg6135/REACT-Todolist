import React, { Component } from "react";
import TodoItem from "./TodoItem.jsx";
import "./App.css";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {id:0, task: "walk the dog"},
        {id:1, task: "walk the cat"},
        {id:2, task: "walk the bunny"},
        {id:2, task: "walk the talk"}
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="todo-header">
            <h2>React Todo List</h2>
          </div>
          <div className="todo-body">
 
            {this.state.todos.map(todoItem => <TodoItem todo={item}/>)}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
