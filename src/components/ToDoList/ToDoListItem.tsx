import React from "react";
import styles from "./ToDoList.module.css";
import { Todo } from "./../../types";
import todos from "../../store/todos";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import WarningButton from "../UI/WarningButton/WarningButton";

interface ToDoListItemProps {
    todo: Todo;
}

const ToDoListItem = observer(function ToDoListItem({
    todo,
}: ToDoListItemProps) {
    const rootClasses = classNames(styles.item, {
        [styles.active]: todo.completed,
    });

    const clickHandler = () => {
        todos.changeCompletionState(todo.id);
    };

    const deleteHandler = (e: any) => {
        e.stopPropagation()
        todos.deleteTask(todo.id)
    }

    return (
        <li onClick={clickHandler} className={rootClasses}>
            <div>{todo.description}</div>
            <div>
                <WarningButton click={deleteHandler}>Delete</WarningButton>
            </div>
        </li>
    );
});

export default ToDoListItem;
