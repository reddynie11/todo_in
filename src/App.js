import React from 'react';

import Todos from './Todos';

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
  render(){
    return(
      <div className="container" >
        <h2 className="center blue-text" > ToDO's</h2>
        <Todos todos={this.state.todos} delTodo={this.delTodo}/>
      </div>
      
    )
  }
}

export default App;
