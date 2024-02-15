import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async action creators using Redux Thunk
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTodosPending());
      const api = import.meta.env.VITE_BASEURL;
      const response = await axios.get(`${api}/api/todos/`);
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosFailure(error.message));
    }
  };
};

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodosPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoCompletion: (state, action) => {
      const todo = state.todos.find((todo) => todo._id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

export const {
  fetchTodosPending,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodo,
  toggleTodoCompletion,
  deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
