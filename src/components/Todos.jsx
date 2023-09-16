import { useState } from "react";
import AddNewTask from "./AddNewTask";
import UpcomingTask from "./UpcomingTask";
import CompletedTask from "./CompletedTask";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

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

    const handleEditTask = (updatedText, todoKey) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.key === todoKey) {
                return { ...todo, text: updatedText };
            }
            return todo;
        });

        setTodos(updatedTodos);
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
                                handleEditTask={handleEditTask}
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
                            <CompletedTask
                                completedTodo={completedTodo}
                                handleTaskRestore={handleTaskRestore}
                                handleTaskDelete={handleTaskDelete}
                                key={completedTodo.key}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
