import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const api = import.meta.env.VITE_BASEURL

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    try {
      const response = await fetch(api + "/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const newTodo = await response.json();
      dispatch(addTodo(newTodo));
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="md:w-[50rem] px-4 py-4 bg-neutral-700">
      <form onSubmit={handleSubmit} className="flex gap-4 justify-between items-center">
        <div className="flex gap-4">
        <div className="flex flex-col">
            Name
          <input
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black rounded-lg p-1 border-2 border-solid border-orange-400 outline-orange-400"
          />
        </div>
        <div className="flex flex-col">
            Description
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black rounded-lg p-1 border-2 border-solid border-orange-400 outline-orange-400"
          />
        </div>
        </div>
        <div className="">

        <button type="submit" className="bg-orange-400 px-4 py-1 rounded-2xl">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
