import React from 'react';
import './Header.css';
import image from '../../photos/main-photo.png'

const Header = () => {
    return (
        <div className="header-section">
            <h1>CHOOSE YOUR TEAMMATES</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default Header;