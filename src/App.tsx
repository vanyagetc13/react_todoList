import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import ToDoList from "./components/ToDoList/ToDoList";
import todos from "./store/todos";

function App() {
    return (
        <div className="App">
            <AddTaskForm />
            <ToDoList todoList={todos.todoList} />
        </div>
    );
}

export default App;
