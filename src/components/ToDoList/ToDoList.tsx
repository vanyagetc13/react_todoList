import React from "react";
import { Todo } from "../../types";
import styles from "./ToDoList.module.css"
import ToDoListItem from "./ToDoListItem";
import { observer } from "mobx-react-lite";


interface ToDoListProps {
    todoList: Todo[];
}

const ToDoList = observer(function ToDoList({ todoList }: ToDoListProps) {
    return (
        <ul className={styles.list}>
            {todoList.map((todo) => (
                <ToDoListItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
});

export default ToDoList;
