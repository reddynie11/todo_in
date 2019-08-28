import React from 'react';

import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component{
  state={
    todos:[
      {id:1, content:'Learn React JS'},
      {id:2, content:'Build React JS Project'}
    ]
  }
  delTodo=(id)=>{
    const Todos = this.state.todos.filter((todo)=>{
      return todo.id !== id
    });
    this.setState({
      todos: Todos
    })
  }
  addTodo=(newTodo)=>{
    newTodo.id= Math.random();
    const NewTodo = [...this.state.todos,newTodo]
    this.setState({
      todos : NewTodo
    })
  }
  render(){
    return(
      <div className="container" >
        <h2 className="center blue-text" > ToDO's</h2>
        <Todos todos={this.state.todos} delTodo={this.delTodo}/>
        <AddTodo addTodo={this.addTodo}  />
      </div>
      
    )
  }
}

export default App;
