import { useState } from "react";
import ListHeading from "./ListHeading";
import InitialScreen from "./InitialScreen";

export default function TodoWrapper() {
    const [haveTodos, setHaveTodos] = useState(false);
    return (
        <div className="todo__wrapper">
            <ListHeading initialContent={"Todays tasks"} />
            {haveTodos ? <h1>Add todos</h1> : <InitialScreen />}
        </div>
    );
}
