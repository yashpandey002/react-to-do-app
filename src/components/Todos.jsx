import { useState } from "react";
import AddNewTask from "./AddNewTask";
import UpcomingTask from "./UpcomingTask";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    console.log(todos);

    const handleTaskDone = (task) => {
        setCompletedTodos([...completedTodos, task]);
        setTodos(todos.filter((todo) => todo.key !== task.key));
    };

    const handleTaskRestore = (task) => {
        setTodos([...todos, task]);
        setCompletedTodos(
            completedTodos.filter(
                (completedTodo) => completedTodo.key !== task.key
            )
        );
    };

    const handleTaskDelete = (task, type) => {
        if (type === "u") {
            setTodos(todos.filter((todo) => todo.key !== task.key));
        } else if (type === "d") {
            setCompletedTodos(
                completedTodos.filter(
                    (completedTodo) => completedTodo.key !== task.key
                )
            );
        }
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
                            <UpcomingTask
                                todo={todo}
                                handleTaskDone={handleTaskDone}
                                handleTaskDelete={handleTaskDelete}
                                key={todo.key}
                            />
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
                        {completedTodos.map((completedTodo) => (
                            <li
                                className="task flex align-center justify-space-between"
                                key={completedTodo.key}
                            >
                                <div className="flex align-center gap-sm">
                                    <img
                                        src="./checkmark.svg"
                                        className="task__done-icon"
                                        onClick={() =>
                                            handleTaskRestore(completedTodo)
                                        }
                                    />
                                    <div className="task__textBox">
                                        {completedTodo.text}
                                    </div>
                                </div>
                                <div className="flex align-center">
                                    <img
                                        src="./delete-icon.svg"
                                        className="task__delete-icon"
                                        onClick={() =>
                                            handleTaskDelete(completedTodo, "d")
                                        }
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
