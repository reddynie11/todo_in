import React from 'react'

class AddTodo extends React.Component{
    state={
        content:''
    }
    render(){
        return(
            <div>
                <form>
                    <label>Add a Task:  </label>
                    <input type="text" />
                </form>
            </div>
        )
    }
}
export default AddTodo;