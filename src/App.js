import './App.css';
import Header from "./MyComponents/header";
import { Footer } from "./MyComponents/footer"
import { ToDos } from "./MyComponents/todos";
import { ToDoItem } from "./MyComponents/todoitem";
import React, { useState, useEffect } from 'react';
import { AddToDo } from "./MyComponents/addtodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {About} from "./MyComponents/about";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am Ondelete of todo", todo);

    setTodos(todos.filter(e => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));



  };

  const addTodo = (title, desc) => {
    console.log("I am adding a to-do", title, TextDecoderStream);
    let sno;
    if (todos.length === 0) (sno = 0);
    else {
      sno = [todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])









  return (
    <>
      <Router>
        <Header title="My To Do's list" searchbar={true} />



        <Routes>
          <Route exact path="/" element={
            
              <>
                <AddToDo addTodo={addTodo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>

            }/>
          
          <Route exact path="/about" element={<About/>}/>
          

        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
