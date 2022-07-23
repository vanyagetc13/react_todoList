import { observer } from "mobx-react-lite";
import React from "react";
import todos from "../../store/todos";
import HorizontalForm from "../UI/HorizontalForm/HorizontalForm";
import MyInput from "../UI/MyInput/MyInput";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const AddTaskForm = observer(() => {
    return (
        <HorizontalForm>
            <MyInput
                onChange={(e) => {
                    todos.taskChangeInput(e.target.value);
                }}
                value={todos.taskInput}
                placeholder="Опишите задачу"
            />
            <PrimaryButton
                click={() => {
                    todos.addTask(todos.taskInput);
                    todos.taskChangeInput("")
                }}
            >
                Добавить
            </PrimaryButton>
        </HorizontalForm>
    );
});

export default AddTaskForm;
