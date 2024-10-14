import React, {useState} from 'react';

export const AddToDo = (props) => {
    const[title, setTitle]=useState("");
    const[desc, setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank!")
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }

    }
    return (

        <div className="container" my-3>
            <h3>Add a to do</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title of to-do"/>
                       
                </div>
                <div class="form-group">
                    <label for="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" placeholder="Add description"/>
                </div>
                
                <button type="submit" class="btn btn-sm btn-success" >Add To-do</button>
            </form>
        </div>

    )
}