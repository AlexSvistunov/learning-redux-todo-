import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice.js";

const TodoItem = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeTodo({id}))
  };
  return (
    <li className="todo">
      <div className="box">
        <input type="checkbox"></input>
        <span>{text}</span>
      </div>
      <span className="delete" onClick={() => deleteItem()}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
