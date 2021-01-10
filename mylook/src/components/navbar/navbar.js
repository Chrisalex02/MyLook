import React from 'react';
import Logo from './logo/logo';
import './navbar.css';

const navbar = () => {
    return(
        <nav>
            <span style={{marginLeft: 0}}>
                <Logo/>
            </span>
            <span style={{marginRight: 0}}>
                <p className='f3 link dim black underline pa3 pointer'>Sing Out</p>
            </span>
        </nav>
    );
}

export default navbar;