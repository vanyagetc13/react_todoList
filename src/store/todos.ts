import { makeAutoObservable } from "mobx";
import { Todo } from "./../types";

class Todos {
    todoList: Todo[] = [
        { id: 0, description: "Погулять с собакой", completed: false },
        { id: 1, description: "Полить цветы", completed: false },
        { id: 2, description: "Покормить кота", completed: false },
        { id: 3, description: "Помыть посуду", completed: false },
    ];

    taskInput: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    changeCompletionState(id: number) {
        const task = this.todoList.find((todo) => todo.id === id);
        if (task) task.completed = !task.completed;
    }

    addTask(text: string) {
        const newTodo: Todo = {
            id: Number(new Date()),
            description: text,
            completed: false,
        };
        this.todoList.push(newTodo)
    }

    taskChangeInput(value: string) {
        this.taskInput = value;
    }
}

export default new Todos();
