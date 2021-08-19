import React, { useState } from "react";
import { NewTodo } from "./styles";
import { database } from '../../services/firebase'

// icons
import { FcPlus, FcDeleteRow, FcEditImage } from "react-icons/fc";
import { useAuth } from "../../contexts/AuthContext";

export default function Index({ title, setTitle }) {

    const [user] = useAuth();
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function handleAddTaskToList(e) {
        e.preventDefault()

        if(task.trim() === ""){
            return
        }

        const newTask = {
            title: title,
            content: task,
            checked: false
        }

        setTaskList([...taskList, newTask]);
        setTask("");
        e.target[0].focus()

    }

    function handleDeleteTaskFromList(content) {

        const newArray = taskList.filter(task => task.content !== content)

        setTaskList(newArray)
    }

    function handleEditTaskFromList(content){
        const newArray = taskList.filter(task => task.content !== content)
        setTaskList(newArray)
        setTask(task.content)
    }


    async function handleSendNewTodoList(){

        await database.ref(`/user/${user.id}/todos`).push(taskList)

        setTask("")
        setTaskList([])
        setTitle("")
    }

    return (
        <NewTodo>
            <form onSubmit={handleAddTaskToList}>
                <input
                    type="text"
                    placeholder="New Todo"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">
                    <FcPlus />
                </button>
            </form>

            <h2>Preview of your TodoList</h2>
            <ul>
                {taskList.map((task, i) => (
                    <li key={i}>
                        <p>{task.content}</p>
                        <div>
                            <button type="button" onClick={() => handleEditTaskFromList(task.content)}>
                                <FcEditImage style={{ fontSize: "1.5rem" }} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDeleteTaskFromList(task.content)}
                            >
                                <FcDeleteRow />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <button type="button" onClick={handleSendNewTodoList}>Save Todo</button>
        </NewTodo>
    );
}
