import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav id="nav-bar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/giphy'>Giphy</Link></li>
            </ul>  
            </nav>
    );
};

export default NavBar;

//api.giphy.com/v1/gifs/random?api_key=HHiDPTwY7dRIc0R3yPU9in7tSMVF9Ero