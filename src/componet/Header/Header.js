import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-green-300 p-4'>
            <nav >
                <NavLink className="text-2xl mx-4 hover:bg-sky-700" to="/home">Home</NavLink>
                <NavLink className="text-2xl mx-4 hover:bg-sky-700" to="/flowers">Flowers</NavLink>
                <NavLink className="text-2xl mx-4 hover:bg-sky-700" to="/about">About</NavLink>
                <NavLink className="text-2xl mx-4 hover:bg-sky-700" to="/Services">Services</NavLink>
            </nav>
        </div>
    );
};

export default Header;