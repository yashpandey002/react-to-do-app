export default function InitialScreen({ setShowTodos }) {
    return (
        <div className="initial-screen__mainBox flex">
            <div className="initial-screen__img-box">
                <img
                    src="./initial-screen-img.svg"
                    className="initial-screen__img"
                />
            </div>
            <div className="initial-screen__addTodo-box">
                <button
                    className="initial-screen__addTodo-btn"
                    onClick={() => setShowTodos(true)}
                >
                    +
                </button>
            </div>
        </div>
    );
}
