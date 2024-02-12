import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { fetchTodos } from './../features/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Fetch todos from backend API and set them in the store
store.dispatch(fetchTodos());

export default store;
