import React, {useState, useEffect} from 'react'; 

function BackgroundPicker(props) {
    const [background, setBackground] = useState('bgr6.png')

    const bgrArray = ['bgr1.png', 'bgr2.png', 'bgr3.png', 'bgr4.png', 'bgr5.png', 'bgr6.png'];

    function handleBgrChange(event) {
        const newBgr = event.target.value;
        setBackground(newBgr);
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(./images/${background}`;
    });

    return (
        <select selected={background} id="backgrounds" name="backgrounds" onChange={handleBgrChange} >
        {bgrArray.map((bgr, index) => {
            return <option value={bgr}>{index+1}</option>
        })}
        </select>
    )
}

export default BackgroundPicker;