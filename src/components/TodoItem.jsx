import React from "react";

const TodoItem = ({el, completeTask, deleteItem}) => {
  return (
    <li className="todo">
      <div className="box">
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => completeTask(el.id)}
        ></input>
        <span className={el.completed ? " line" : ""}>{el.text}</span>
      </div>
      <span onClick={() => deleteItem(el.id)} className="delete">
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
