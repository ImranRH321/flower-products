import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>the page is Header</h2>
            <nav>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/flowers">Flowers</CustomLink>
            </nav>
        </div>
    );
};

export default Header;