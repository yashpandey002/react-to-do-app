import { useState } from "react";

export default function ListHeading({ initialContent }) {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(initialContent);

    return (
        <nav className="todo__list-heading-mainBox flex">
            <div className="todo__list-heading-wrapper flex">
                {isEditing ? (
                    <input
                        className="todo__list-heading__input"
                        type="text"
                        value={content}
                        autoFocus
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                setIsEditing(false);
                            }
                        }}
                    />
                ) : (
                    <h1 className="todo__list-heading">{content}</h1>
                )}

                <div>
                    <img
                        src="./edit-icon.svg"
                        onClick={() => {
                            setIsEditing(true);
                        }}
                        className="todo__list-heading__input-icon"
                    />
                </div>
            </div>
        </nav>
    );
}
