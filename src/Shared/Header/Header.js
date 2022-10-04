import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='container mt-4'>            
            <img src='logo.svg' className="d-block" alt="..." />
            <h1>Greenhouse Gas Footprint Calculator</h1>
            <hr></hr>
        </div>
    );
};

export default Header;