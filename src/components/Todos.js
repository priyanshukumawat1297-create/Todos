import React from 'react'
import Todoitem from './Todoitem'

function Todos(props) {
    let mystyle = {
        minHeight: "70vh",
        margin: "40px auto"

    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className='my-3 ms-4'>My TodosList</h3>
            {props.todos.length === 0 ? "No Todods to display" :
                props.todos.map((todo) => {
                    return <Todoitem editTodo={props.editTodo} todo={todo} key={todo.sno} ondelete={props.ondelete} />
                })
            }
        </div>
    )
}

export default Todos
