"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };

  return (
    <div className="bg-slate-200 p-7 h-fit">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black font-bold">Agregar tarea</h1>
        <label htmlFor="title" className="text-xs text-black">
          Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id=""
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
        />
        <label htmlFor="description" className="text-xs text-black">
          Description:
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900"
          name="description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="bg-indigo-500 text-white rounded-md p-2 block w-full">Save</button>
      </form>
    </div>
  );
}

export default FormTask;
