export default function CompletedTask({
    completedTodo,
    handleTaskRestore,
    handleTaskDelete,
}) {
    return (
        <li
            className="task flex align-center justify-space-between"
            key={completedTodo.key}
        >
            <div className="flex align-center gap-sm">
                <img
                    src="./checkmark.svg"
                    className="task__done-icon"
                    onClick={() => handleTaskRestore(completedTodo)}
                />
                <div className="task__textBox">{completedTodo.text}</div>
            </div>
            <div className="flex align-center">
                <img
                    src="./delete-icon.svg"
                    className="task__delete-icon"
                    onClick={() => handleTaskDelete(completedTodo, "d")}
                />
            </div>
        </li>
    );
}
