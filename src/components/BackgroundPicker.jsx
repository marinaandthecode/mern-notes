import React, {useState, useEffect} from 'react'; 

function BackgroundPicker(props) {
    const [background, setBackground] = useState('bgr1.png')

    const bgrArray = ['bgr1.png', 'bgr2.png', 'bgr3.png', 'bgr4.png', 'bgr5.png', 'bgr6.png'];

    function handleBgrChange(event) {
        const newBgr = event.target.value;
        setBackground(newBgr);
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url(./images/${background}`;
    });

    return (
        <select id="backgrounds" className="bgr-picker" name="backgrounds" onChange={handleBgrChange} >
        {bgrArray.map((bgr, index) => {
            return <option style={{backgroundImage: `url(./images/${bgr}`}} value={bgr}>{index+1}</option>
        })}
        </select>
    )
}

export default BackgroundPicker;