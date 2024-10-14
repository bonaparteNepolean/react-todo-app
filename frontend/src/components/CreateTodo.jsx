import { useState } from "react";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="todo"
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}
            ></input>
            <input
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            ></input>
            <button
                onClick={() => {
                    fetch("http://localhost:3000/create", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                    }).then(async (res) => {
                        const json = await res.json();
                        alert("todo added");
                    });
                }}
            >
                Add a todo
            </button>
        </div>
    );
};

export default CreateTodo;
