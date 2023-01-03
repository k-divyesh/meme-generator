import React from 'react';
export default function Preview({ imgURL, upperText, lowerText }) {
    return (
        <div className="memeContainer">
            <div className="upperText">{upperText}</div>
            <img className="meme" src={imgURL} />
            <span className="lowerText">{lowerText}</span>
        </div>
    );
}
