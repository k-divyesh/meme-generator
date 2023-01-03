import React from 'react';
import memesData from '../Data';
import Preview from './Preview';

export default function Inputs() {
    let [imgURL, setImgURL] = React.useState(
        'https://i.imgflip.com/3oevdk.jpg'
    );
    let [upperText, setUpperText] = React.useState('');
    let [lowerText, setLowerText] = React.useState('');

    function getImage() {
        console.log('clicked');

        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setImgURL(url);
    }

    function handleUpperTextChange(e) {
        setUpperText(e.target.value);
    }

    function handleLowerTextChange(e) {
        setLowerText(e.target.value);
    }

    return (
        <>
            <div className="inputs">
                <div className="inputs--fields">
                    <input
                        value={upperText}
                        onChange={handleUpperTextChange}
                        className="inputs--fields--field"
                        type="text"
                        placeholder="Upper Text"
                    />
                    <input
                        value={lowerText}
                        onChange={handleLowerTextChange}
                        className="inputs--fields--field"
                        type="text"
                        placeholder="Lower Text"
                    />
                </div>
                <button className="inputs--submit" onClick={getImage}>
                    Get a new image 🖼️
                </button>
            </div>

            <Preview
                imgURL={imgURL}
                upperText={upperText}
                lowerText={lowerText}
            />
        </>
    );
}
