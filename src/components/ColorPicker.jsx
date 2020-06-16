import React from 'react';

function ColorPicker(props) {
    return (
        <div className="color-picker" style={props.position}>
            <label style={{fontSize: "0.7rem"}} htmlFor="note-bgr">Choose color</label>
            <input type="color" name="note-bgr" defaultValue="#eee8aa" onInput={props.onColorChange}></input>
        </div> 
    )
}

export default ColorPicker;