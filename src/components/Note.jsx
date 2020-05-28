import React, {useState} from 'react';

function Note(props) {

    const [note, setNote] = useState("");

    function handleInput(event) {
        const content = event.target.value;
        setNote(content);
    }

    function handleDeleteClick() {
        props.onDelete(props.id);
    }

    function handleAddClick() {
        props.onAdd(note);
    }

    return (
        <div className="note" draggable="true" onContextMenu>
            <textarea onInput={handleInput} className="note-content">{note}</textarea>
            <button className="note-control add" onClick={handleAddClick}>+</button>
            <button className="note-control delete" onClick={handleDeleteClick}>x</button>
        
        </div>
    )
}

export default Note;
