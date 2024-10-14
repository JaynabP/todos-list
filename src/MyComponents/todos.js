import React from 'react'
import { ToDoItem } from "../MyComponents/todoitem";

export const ToDos=(props)=>{
    let mystyle={
        minHeight:"70vh",
        margin:"40px auto"

    }
    return(
        <div className="container my-3" style={mystyle} >
            <h3   className="text-center">To Do's list</h3>
            {props.todos.length===0?"No To do's to display :)":
            props.todos.map((todo)=>{
                    return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        
        
            

        </div>  
    );
}