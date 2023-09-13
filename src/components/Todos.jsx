import { useState } from "react";
import AddNewTask from "./AddNewTask";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    console.log(todos);

    const handleTaskDone = (task) => {
        setCompletedTodos([...completedTodos, task]);
        setTodos(todos.filter((todo) => todo.key !== task.key));
    };

    return (
        <div className="todos__mainBox">
            <AddNewTask todos={todos} setTodos={setTodos} />

            <div className="todos__upcomingTaks__mainBox flex">
                <div className="todos__upcomingTaks__wrapper">
                    <h2 className="todos__upcomingTaks__heading">
                        Upcoming tasks:
                    </h2>
                    <ul className="todos__upcomingTaks__listContainer flex">
                        {todos.map((todo) => (
                            <li
                                className="task flex align-center justify-space-between"
                                key={todo.key}
                            >
                                <div className="flex align-center gap-sm">
                                    <img
                                        src="./task-indicator.svg"
                                        className="task__indicator-icon"
                                    />
                                    <div className="task__textBox">
                                        {todo.text}
                                    </div>
                                </div>
                                <div
                                    className="flex align-center"
                                    onClick={() => {
                                        // console.log(
                                        //     "Delete this element from Todos array"
                                        // );
                                        // console.log(
                                        //     "Add this element in completedTodo array"
                                        // );
                                        handleTaskDone(todo);
                                    }}
                                >
                                    <img
                                        src="./edit-task-icon.svg"
                                        className="task__edit-icon"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="todos__finishedTaks-mainBox flex">
                <div className="todos__finishedTaks__wrapper">
                    <h2 className="todos__finishedTaks__heading">
                        Finished tasks:
                    </h2>
                    <ul className="todos__finishedTaks__listContainer flex">
                        {/* {todos.map((todo) => (
                            <li className="task" key={todo.key}>
                                <img src="./task-indicator.svg" />
                                {todo.text}
                            </li>
                        ))} */}
                        {completedTodos.map((completedTodo) => (
                            <li className="task" key={completedTodo.key}>
                                <img src="./task-indicator.svg" />
                                {completedTodo.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
