import React, { createContext, useContext, useEffect, useState } from "react";
import { firebase, auth } from "../services/firebase";

export const AuthContext = createContext();

export function useAuth() {
    const value = useContext(AuthContext);
    return value;
}

export default function AuthContextProvider(props) {
    const [user, setUser] = useState("");

    //mantendo user logado
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error("Missing information from Google account");
                }

                setUser({
                    name: displayName,
                    avatar: photoURL,
                    id: uid,
                });
            }
        });

        return () => {
            unsubscribe()
        }
    }, []);

    //sign up
    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const results = await auth.signInWithPopup(provider);

        if (results.user) {
            const { displayName, photoURL, uid } = results.user;

            if (!displayName || !photoURL) {
                throw new Error("Missing information from Google account");
            }

            setUser({
                name: displayName,
                avatar: photoURL,
                id: uid,
            });

        }
    }

    return (
        <AuthContext.Provider value={[user, signInWithGoogle]}>
            {props.children}
        </AuthContext.Provider>
    );
}
