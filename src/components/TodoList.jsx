import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../store/todoSlice";
import { BeatLoader } from "react-spinners";

const TodoList = () => {
  const {status, error} = useSelector(state => state.todos)
  console.log(status);
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const todoList = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todoList.length ? todoList.map((el) => (
        <TodoItem key={el.id} title={el.title} id={el.id} isCompleted={el.completed}></TodoItem>
      )) : <h3>НЕТ ДЕЛ</h3>}

      {status === 'error' && <h2>Server error!!!</h2>}
      {status === 'loading' && <BeatLoader color="#36d7b7" />}
      
    </ul>
  );
};

export default TodoList;
