import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [data, setData] = useState([]);
  
  const getTodos = async () => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${10}`
      );
      data = await data.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handelDel=(id)=>{
    let newData=data.filter((el)=> el.id!==id)
    setData(newData)
  }
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      Todo
      <button onClick={getTodos}>Fetch</button>
      <div>
        <TodoList handelDel={handelDel} data={data} />
      </div>
    </div>
  );
};

export default Todo;
