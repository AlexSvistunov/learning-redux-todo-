import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (value) => {
    setInputValue(value);
  };

  const onClickHandler = (value) => {
    if (value.trim().length) {
      setTodoList([
        ...todoList,
        {
          id: new Date().toISOString(),
          text: value,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: true,
          };
        }

        return {
          ...el,
        };
      })
    );
  };

  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={(e) => onChangeHandler(e.target.value)}
        ></input>
        <button onClick={() => onClickHandler(inputValue)}>Create todo</button>
      </div>

      <ul>
        {todoList.map((el) => (
          <li className="todo" key={el.id}>
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
        ))}
      </ul>
    </>
  );
}

export default App;
