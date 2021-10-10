import React from 'react';
import './Qr.css';
import qrImage from './qrImage.png';

function Qr() {
    return(
        <div id="qrContainer">
            <h2 id="qrTitle">Scan to Login:</h2>
            <img id="qr" alt="Qr Code" src={qrImage}/>
            <div id="checkBoxContainer">
                <input id ="checkBox" type="checkbox" />
                <label id="checkBoxText"for="checkBox">Maintain active session</label>
            </div>   
        </div>
        )
}

export default Qr;