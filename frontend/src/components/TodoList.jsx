import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoCompletion, deleteTodo } from "../features/todoSlice";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const handleToggle = async (id) => {
    try {
      const response = await fetch(`http://localhost:4040/api/todos/${id}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to toggle todo completion");
      }

      dispatch(toggleTodoCompletion(id));
    } catch (error) {
      console.error("Error toggling todo completion:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4040/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      dispatch(deleteTodo(id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="md:w-[50rem] py-4 bg-neutral-700 mt-4">
      <ul className="">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center border-b-2 border-neutral-800 px-4"
          >
            <div className="py-2">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <h3 className="text-3xl text-orange-400 font-[500]">
                  {todo.title}
                </h3>

                <p> {todo.description}</p>
              </span>
            </div>
            <div className="flex gap-6">
              {!todo.completed && (
                <button
                  onClick={() => handleToggle(todo._id)}
                  className="border-2 border-green-500 px-4 py-1 rounded-2xl text-green-500  font-[600] bg-pink-100"
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => handleDelete(todo._id)}
                className="border-2 border-orange-500 px-4 py-1 rounded-2xl text-orange-500  font-[600] bg-pink-100"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
