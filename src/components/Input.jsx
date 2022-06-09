import React, { useState } from 'react';
import "../app.css"
import axios from "axios";


function Input() {

const [todo, setTodo] = useState("");
    

async function addTodo() {
  await axios.post("http://localhost:4000/todos", {
    todoinfo: todo,
  });
}

const handleChange = (e) => {
setTodo(e.target.value)
         
     };      
 return  (
   <div className='App'>
      
            <h1>whats good</h1>
        
   
    <form>
    <input className='inputer'
      placeholder="whats next"
      
      onChange={(e) => handleChange(e)}

      value={todo}
      
    />
    <button onClick={() => [addTodo()]}>Add todo</button>
  </form>
  </div>
);
}
  
 export default Input;
