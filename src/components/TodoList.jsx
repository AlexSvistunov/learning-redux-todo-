import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todoList.length ? todoList.map((el) => (
        <TodoItem key={el.id} text={el.text} id={el.id}></TodoItem>
      )) : <h3>НЕТ ДЕЛ</h3>}
      
    </ul>
  );
};

export default TodoList;
