import React from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import ToDoList from "./components/ToDoList/ToDoList";
import todos from "./store/todos";
import { useFilterByAllFilters } from "./hooks/useToDoList";
import ColoredHRLine from "./components/UI/ColoredHRLine/ColoredHRLine";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    return (
        <div className="App">
            <ToDoHeader />
            <ColoredHRLine />
            <ToDoList todoList={useFilterByAllFilters(todos.todoList, todos.query, todos.showOnlyCompleted)} />
        </div>
    );
})

export default App;
