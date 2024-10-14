import React from 'react'

export const Footer=()=>{
    let footerstyle ={
       
    top: "96vh",
    width: "100%",
    border: "2px solid red",
    }
    return(
    <footer className="bg-dark text-light" py-5
    style={footerstyle}>
        <p className="text-center">
        Copyright &copy; MyTodoslist.com

        </p>
    </footer>)
}