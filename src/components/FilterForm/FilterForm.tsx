import React from "react";
import todos from "../../store/todos";
import HorizontalForm from "../UI/HorizontalForm/HorizontalForm";
import MyInput from "./../UI/MyInput/MyInput";
import { observer } from "mobx-react-lite";
import styles from "./FilterForm.module.css";
import classNames from "classnames";

const FilterForm = observer(() => {
    return (
        <HorizontalForm>
            <MyInput
                placeholder="Поиск..."
                value={todos.query}
                onChange={(e) => {
                    todos.queryChangeInput(e.target.value);
                }}
            />
            <div className={styles.form_toggle}>
                <div
                    onClick={() => {
                        !todos.showOnlyCompleted &&
                            todos.setShowOnlyCompletedState(true);
                    }}
                    className={classNames(
                        styles.form_toggle_item,
                        styles.item_1
                    )}
                >
                    <input
                        id="fid-1"
                        type="radio"
                        value="Done"
                        onChange={() => {}}
                        checked={todos.showOnlyCompleted}
                    />
                    <label>Done</label>
                </div>
                <div
                    onClick={() => {
                        todos.showOnlyCompleted &&
                            todos.setShowOnlyCompletedState(false);
                    }}
                    className={classNames(
                        styles.form_toggle_item,
                        styles.item_2
                    )}
                >
                    <input
                        id="fid-2"
                        type="radio"
                        value="All"
                        onChange={() => {}}
                        checked={!todos.showOnlyCompleted}
                    />
                    <label>All</label>
                </div>
            </div>
        </HorizontalForm>
    );
});

export default FilterForm;
