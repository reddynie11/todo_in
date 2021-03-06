import React from 'react';

const Todos = ({todos, delTodo})=>{
    const todoList = 
    todos.length ? (
        todos.map((todo)=>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{delTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ):(<p className='center'>No ToDos yet</p>)
    return(
        <div className="todos collection" >
             {todoList}
        </div>
       

    )
}
export default Todos;