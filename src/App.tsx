import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import todos from "./store/todos";
import ColoredHRLine from "./components/UI/ColoredHRLine/ColoredHRLine";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    return (
        <div className="App">
            <ToDoHeader />
            <ColoredHRLine color="rgba(0, 128, 128, 0.8)"/>
            <ToDoList todoList={todos.listByAllFilters} />
        </div>
    );
})

export default App;
