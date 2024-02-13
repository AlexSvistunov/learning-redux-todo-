import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice.js";

const TodoItem = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeTodo({id}))
  };

  const toggleTodoHandler = () => {
    dispatch(toggleTodo({id}))
  }
  return (
    <li className="todo">
      <div className="box">
        <input type="checkbox" onChange={() => toggleTodoHandler()} checked={isCompleted}></input>
        <span style={isCompleted ? {textDecoration: 'line-through'} : null}>{text}</span>
      </div>
      <span className="delete" onClick={() => deleteItem()}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
