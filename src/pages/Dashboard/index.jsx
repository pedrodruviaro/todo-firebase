import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Dashboard } from "./styles";
import { FcTodoList } from "react-icons/fc";
import NewTodo from "../../components/NewTodo";
import NewNote from "../../components/NewNote";

export default function Index() {
    const [user] = useAuth();
    const [title, setTitle] = useState("");
    const [type, setType] = useState("todo");

    // radio handler
    const isRadioSelected = (value) => type === value;
    const handleRadioClick = (e) => setType(e.target.value);

    return (
        <Dashboard>
            <header>
                <div className="logo-container">
                    <FcTodoList />
                    <h1>Todo Manager</h1>
                </div>

                <div className="user-info">
                    <img src={user.avatar} alt={user.name} />
                    <span>{user.name}</span>
                    <button>Logout</button>
                </div>
            </header>

            <main>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <div>
                        <label>
                            <input
                                type="radio"
                                name="content-type"
                                value="todo"
                                onChange={handleRadioClick}
                                checked={isRadioSelected("todo")}
                            />
                            TodoList
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="content-type"
                                value="note"
                                onChange={handleRadioClick}
                                checked={isRadioSelected("note")}
                            />
                            Note
                        </label>
                    </div>

                    {type === "todo" ? (
                        <NewTodo title={title} setTitle={setTitle} />
                    ) : (
                        <NewNote
                            setTitle={setTitle}
                            title={title}
                        />
                    )}
                </div>
            </main>
        </Dashboard>
    );
}
