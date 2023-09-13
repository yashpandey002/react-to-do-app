import { useState } from "react";
import ListHeading from "./ListHeading";
import InitialScreen from "./InitialScreen";
import Todos from "./Todos";

export default function TodoWrapper() {
    const [showTodos, setShowTodos] = useState(false);

    return (
        <div className="todo__wrapper">
            <ListHeading initialContent={"Todays tasks"} />
            {showTodos ? (
                <Todos />
            ) : (
                <InitialScreen setShowTodos={setShowTodos} />
            )}
        </div>
    );
}
