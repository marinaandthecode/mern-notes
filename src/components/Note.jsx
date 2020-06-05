import React, {useState} from 'react';

function Note(props) {

    const [note, setNote] = useState({
        content: "",
        dateCreated: new Date().toLocaleString()
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

    return (
        <div className="note" onContextMenu>
            <textarea onInput={handleInput} className="note-content">{note.content}</textarea>
            <button className="note-control add" onClick={handleAddClick}>+</button>
            <p></p>
            <button className="note-control delete" onClick={handleDeleteClick}>x</button>
        </div>
    )
}

export default Note;
