import React, { useEffect, useState } from "react";

import axios from "axios";
import "../app.css";

function Form() {
  const [todo, setTodo] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    setTodo(data);
  };

  function deleteItem(id) {
    axios.delete(`http://localhost:4000/todos/${id}`);
    console.log(`${id} is deleted`);
  }

  function completeItem(todo) {
    axios.put(`http://localhost:4000/todos/${todo.id}`, {
        id:todo.id,
        todoinfo: todo.todoinfo,
        complete: !todo.complete,
      })
      .then(function (res) {
        console.log(res);
        getTodos();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <ul className="listo" >
        {todo.map((todos) => (
          <li value={todos.id} key={todos.id}>
            {todos.todoinfo}
            <button
              className="Deletes"
              onClick={() => {
                deleteItem(todos.id), window.location.reload();
              }}
            >&#128465;
            </button>
            <button
              className="boxer"
              onClick={() => {
                completeItem(todos);
              }}
            >&#10003;</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Form;
