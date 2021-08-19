import React from "react";
import { NewTodo } from "./styles";

// icons
import { FcPlus } from "react-icons/fc";



export default function index() {
    return (
        <NewTodo>
            <input type="text" placeholder="New Todo" />
            <button type="button">
                <FcPlus />
            </button>
        </NewTodo>
    );
}
