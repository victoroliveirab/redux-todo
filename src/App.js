import React from "react";
import "./App.css";
import TaskList from "./components/task-list/tasklist.component";
import TaskForm from "./components/register-task-form/taskform.component";

function App() {
    return (
        <div>
            <h1>To-do list</h1>
            <TaskList />
            <TaskForm />
        </div>
    );
}

export default App;
