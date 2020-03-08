import React from "react";
import "./App.css";
import TaskList from "./components/task-list/tasklist.component";

function App() {
    return (
        <div>
            <h1>To-do list</h1>
            <TaskList />
        </div>
    );
}

export default App;
