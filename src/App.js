import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './style.css';
class App extends React.Component {
  state = {
    todos: [
      {id:1,content:'Buy some Milk'},
      {id:2, content:'Play clash of clan'}
    ],
    nottodo: [
      {id:5,content:" Not Play game a lot"},
      {id:6,content:" Do not watch Youtube more"}
    ]
  }


  deleteTodo  = (id) => {
    const todos = this.state.todos.filter( todo => {
     return todo.id !== id
    });
    
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos:todos
    })
  }


  
  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>       
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  } 
}

export default App;
