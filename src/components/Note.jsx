import React, {useState} from 'react';

function Note(props) {

    const [note, setNote] = useState({
        content: "",
        dateCreated: new Date().toLocaleString(), 
        noteColor: "#eee8aa"
    });

    function handleInput(event) {
        const content = event.target.value;
        setNote(prevNote => {
            return {
                ...prevNote, 
                content: content
            }
        });
    }

    function handleDeleteClick() {
        props.onDelete(props.id);
    }

    function handleAddClick() {
        props.onAdd(note);
    }

    function handleColorInput(event) {
        const noteColor = event.target.value; 
        setNote(prevNote => {
            return {
                ...prevNote,
                noteColor: noteColor
            }
        })

    }

    return (
        <div className="note" style={{backgroundColor: note.noteColor}} onContextMenu>
            <textarea onInput={handleInput} className="note-content">{note.content}</textarea>
            <button className="note-control add" onClick={handleAddClick}>+</button>
            
            {/* TODO: create ColorPicker component - displayonContextMenu */}
            <label style={{fontSize: "0.7rem"}} for="note-bgr">Choose color</label>
            <input type="color" name="note-bgr" value="#667482" onInput={handleColorInput}></input>

            <button className="note-control delete" onClick={handleDeleteClick}>x</button>
        </div>
    )
}

export default Note;
