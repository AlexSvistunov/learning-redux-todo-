import { useState } from "react";
import "./App.css";
import TodoBtn from "./components/TodoBtn";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <TodoInput value={inputValue} onChangeHandler={onChangeHandler} />
      <TodoBtn setInputValue={setInputValue} value={inputValue} />
      <TodoList />
    </>
  );
}

export default App;
