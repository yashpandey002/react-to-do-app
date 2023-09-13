import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNewTask({ todos, setTodos }) {
    const [newTask, setNewTask] = useState("");
    const inputRef = useRef(null);

    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTodos([...todos, { text: newTask, key: uuidv4() }]);
        setNewTask("");
        inputRef.current.focus();
    };

    return (
        <div className="addNewTask__mainBox flex">
            <div className="addNewTask__wrapper flex">
                <input
                    type="text"
                    className="addNewTask-input"
                    placeholder="Add new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddTask();
                        }
                    }}
                    autoFocus
                    ref={inputRef}
                />
                <button
                    className="addNewTask-btn"
                    onClick={() => {
                        handleAddTask();
                    }}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}
