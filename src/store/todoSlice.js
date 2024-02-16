import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" }
      );

      dispatch(removeTodo({id}));
      if (!response.ok) {
        throw new Error("Delete error");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertTodo = createAsyncThunk(
  'todos/insertTodo',
  async function(value, {rejectWithValue, dispatch}) {
    try {
      const todo = {
        userId: '1',
        title: value,
        completed: false,
      }
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(todo)
      })

      console.log(response);

      if(!response.ok) {
        throw new Error('Insert todo error')
      }

      const data = await response.json()
      dispatch(addTodo(data))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const toggleStatus = createAsyncThunk(
  'todos/toggleStatus',
  async function(id, {rejectWithValue, dispatch, getState}) {
    const todo = getState().todos.todos.find(todo => todo.id === id);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !todo.completed,
        })
      })
      dispatch(toggleTodo({id}))
      if (!response.ok) {
        throw new Error("Server toggle error");
      }

    } catch (error) {
      return rejectWithValue(error.message);
    }
   
  }
)

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("Server error");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
     state.todos.push(action.payload)
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

// тут reducers, но формируется один reducer
