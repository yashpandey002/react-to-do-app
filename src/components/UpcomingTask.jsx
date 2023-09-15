export default function UpcomingTask({
    todo,
    handleTaskDone,
    handleTaskDelete,
}) {
    return (
        <li
            className="task flex align-center justify-space-between"
            key={todo.key}
        >
            <div className="flex align-center gap-sm">
                <img
                    src="./task-indicator.svg"
                    className="task__indicator-icon"
                    onClick={() => handleTaskDone(todo)}
                />
                <div className="task__textBox">{todo.text}</div>
            </div>
            <div className="flex align-center gap-sm">
                <img src="./edit-task-icon.svg" className="task__edit-icon" />
                <img
                    src="./delete-icon.svg"
                    className="task__delete-icon"
                    onClick={() => handleTaskDelete(todo, "u")}
                />
            </div>
        </li>
    );
}
