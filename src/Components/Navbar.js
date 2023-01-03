import React from 'react';
import image from '../assets/Troll Face.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <header className="navbar--header">
                <img className="navbar--header--image" src={image} alt="logo" />
                <span className="navbar--header--heading">Meme Generator</span>
            </header>
            <span className="navbar--title">React Course - Project 3</span>
        </nav>
    );
}
