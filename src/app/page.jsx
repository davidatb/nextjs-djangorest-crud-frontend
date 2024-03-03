import React from "react";
import FromTask from "./components/FormTask";
import ListTasks from "./components/ListTask";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div className="container mx-auto p-10">
      <h1>Task app</h1>
      <div className="flex gap-x-10">
        <FromTask />
        <ListTasks />
      </div>
    </div>
  );
}

export default HomePage;
