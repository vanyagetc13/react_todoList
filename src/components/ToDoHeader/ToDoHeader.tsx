import React from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterForm from "../FilterForm/FilterForm";
import styles from "./ToDoHeader.module.css"

const ToDoHeader = () => {
    return (
        <div className={styles.header}>
            <AddTaskForm />
            <FilterForm />
        </div>
    );
};

export default ToDoHeader;
