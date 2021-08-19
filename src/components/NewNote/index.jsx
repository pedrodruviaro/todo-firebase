import React, { useState } from "react";
import { NewNote, Textarea } from "./styles";

export default function Index() {
    const [noteContent, setNoteContent] = useState("");
    const [color, setColor] = useState("#ff0000");

    return (
        <NewNote>
            <Textarea
                placeholder="New note"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                customColor={color}
                style={{borderColor: color}}
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </NewNote>
    );
}
