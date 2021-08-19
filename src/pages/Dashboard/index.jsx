import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Dashboard } from "./styles";
import { FcTodoList } from "react-icons/fc";
import NewTodo from '../../components/NewTodo'
import NewNote from '../../components/NewNote'

export default function Index() {
    const [user] = useAuth();
    const [title, setTitle] = useState("");
    const [type, setType] = useState("todo");

    // submit handler
    function handleNewContent(event) {
        event.preventDefault();

        console.log({ title, type });
    }

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
                <form onSubmit={handleNewContent}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <fieldset>
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
                    </fieldset>

                    {type === "todo" ? <NewTodo /> : <NewNote />}

                    <button type="submit">Add</button>
                </form>
            </main>
        </Dashboard>
    );
}
