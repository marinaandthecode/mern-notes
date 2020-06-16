import React, {useState} from 'react';
import ColorPicker from './ColorPicker';

function Note(props) {

    const {id, onAdd, onDelete} = props;

    const [note, setNote] = useState({
        content: "",
        dateCreated: new Date().toLocaleString(), 
    });

    const [color, setColor] = useState("#eee8aa");

    function handleInput(event) {
        const content = event.target.value;
        // onEdit(content, id);
        setNote(prevNote => {
            return {
            ...prevNote,
            content: content
            }
        });
    }

    function handleDeleteClick() {
        onDelete(id);
    }

    function handleAddClick() {
        onAdd(note);
    }

    function handleColorInput(event) {
        const noteColor = event.target.value; 
        setColor(noteColor);
    }

    const [isShown, setIsShown] = useState(false);
    const [position, setPosition] = useState({left : 0, top : 0, visibility : "hidden"});

    function handleContextMenu(event) {
        event.preventDefault();
        setIsShown(true);
        const left = event.pageX;
        const top = event.pageY;

        setPosition(prevPosition => {
            return {
                ...prevPosition,
                left: left,
                top: top,
                visibility: "visible"
            }
        })
    }

    return (
        <div className="note" style={{backgroundColor: color}} onContextMenu={handleContextMenu}>
            <textarea onInput={handleInput} className="note-content">{note.content}</textarea>
            <button className="note-control add" onClick={handleAddClick}>+</button>
            {isShown && <ColorPicker onColorChange={handleColorInput} position={position}/>}
            <button className="note-control delete" onClick={handleDeleteClick}>x</button>
        </div>
    )
}

export default Note;
