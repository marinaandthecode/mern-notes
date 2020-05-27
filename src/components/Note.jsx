import React from 'react';

function Note() {
    return (
        <div className="note" draggable="true" onContextMenu>
            <textarea className="note-content"></textarea>
        </div>
    )
}

export default Note;
