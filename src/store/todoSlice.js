import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.value,
        completed: false,
      });
    },
    removeTodo(state, action) {
       state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {},
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer

// тут reducers, но формируется один reducer
