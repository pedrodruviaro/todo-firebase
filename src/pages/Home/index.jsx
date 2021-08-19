import React from "react";
import { Home } from "./styles";

import { FcGoogle, FcTodoList } from "react-icons/fc";
import heroLeft from "../../assets/images/hero_left.svg";
import heroRight from "../../assets/images/hero_right.svg";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Index() {
    const history = useHistory();
    const [user, signInWithGoogle] = useAuth();

    async function handleLogIn() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push(`/dashboard/${user.id}`);
    }

    return (
        <Home>
            <img src={heroLeft} alt="" />
            <div>
                <FcTodoList />
                <h1>Todo Manager</h1>
                <p>Keep your life organized.</p>
                <button onClick={handleLogIn}>
                    <FcGoogle />
                    Enter with your Google Account
                </button>
            </div>
            <img src={heroRight} alt="" />
        </Home>
    );
}
