import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, deleteItem, completeTask }) => {
  return (
    <ul>
      {todoList.map((el) => (
        <TodoItem key={el.id} deleteItem={deleteItem} completeTask={completeTask} el={el}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
