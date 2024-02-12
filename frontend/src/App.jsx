import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { fetchTodos } from './features/todoSlice';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const status = useSelector(state => state.todos.status);
  const error = useSelector(state => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

 
  return (
    <div className='py-8 w-full'>
      <h1 className='text-3xl py-4 text-center'>My Todos</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
