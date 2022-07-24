import React, { useMemo } from "react";
import styles from "./ToDoList.module.css";
import { Todo } from "./../../types";
import todos from "../../store/todos";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

interface ToDoListItemProps {
    todo: Todo;
}

const ToDoListItem = observer(function ToDoListItem({ todo }: ToDoListItemProps) {
    const rootClasses = classNames(styles.item, {
        [styles.active]: todo.completed,
    });
    const clickHandler = () => {
        todos.changeCompletionState(todo.id);
    };

    return (
        <li onClick={clickHandler} className={rootClasses}>
            {todo.description}
        </li>
    );
});

export default ToDoListItem;
