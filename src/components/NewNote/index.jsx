import React, { useState } from "react";
import { NewNote, Textarea } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { database } from '../../services/firebase'
 
export default function Index({ title, setTitle }) {

    const [noteContent, setNoteContent] = useState("");
    const [color, setColor] = useState("#ff0000");
    const [user] = useAuth();
    
    async function handleNewNote(e){
        e.preventDefault()

        if(noteContent.trim() === ""){
            return
        }

        const newNote = {
            title: title,
            content: noteContent,
            color: color,
            author: user.id
        }

        await database.ref(`user/${user.id}/notes`).push(newNote)

        setNoteContent("")
        setColor("#ff0000")
        setTitle("")
    }

    return (
        <NewNote>
            <Textarea
                placeholder="New note"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                customColor={color}
                style={{borderColor: color}}
                required
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button type="submit" onClick={handleNewNote}>Save Note</button>
        </NewNote>
    );
}
