import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, handelDel }) => {
    
  return (
    <div>
      <div>
        {data.map((todo) => (
          <TodoItem key={todo.id} data={todo} handelDel={handelDel} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
