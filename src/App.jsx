import { useState } from "react";
import "./App.css";
import TodoBtn from "./components/TodoBtn";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (value) => {
    setInputValue(value);
  };

  const onClickHandler = () => {
    if (inputValue.trim().length) {
      setTodoList([
        ...todoList,
        {
          id: new Date().toISOString(),
          text: inputValue,
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
            completed: !el.completed,
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
        <TodoInput onChangeHandler={onChangeHandler} value={inputValue} />
        <TodoBtn onClickFunction={onClickHandler} />
      </div>

      <TodoList
        completeTask={completeTask}
        deleteItem={deleteItem}
        todoList={todoList}
      />
    </>
  );
}

export default App;
