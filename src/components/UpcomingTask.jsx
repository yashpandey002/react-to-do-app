import { useState } from "react";

export default function UpcomingTask({
    todo,
    handleTaskDone,
    handleEditTask,
    handleTaskDelete,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(todo.text);

    return (
        <li
            className="task flex align-center justify-space-between"
            key={todo.key}
        >
            <div className="flex align-center gap-sm flex-grow-1">
                <img
                    src="./task-indicator.svg"
                    className="task__indicator-icon"
                    onClick={() => handleTaskDone(todo)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        className="task__input"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleEditTask(content, todo.key);
                                setIsEditing(false);
                            }
                        }}
                        autoFocus
                    />
                ) : (
                    <div className="task__textBox">{todo.text}</div>
                )}
            </div>
            <div className="flex align-center gap-sm">
                <img
                    src="./edit-task-icon.svg"
                    className="task__edit-icon"
                    onClick={() => {
                        setIsEditing(true);
                    }}
                />
                <img
                    src="./delete-icon.svg"
                    className="task__delete-icon"
                    onClick={() => handleTaskDelete(todo, "u")}
                />
            </div>
        </li>
    );
}
