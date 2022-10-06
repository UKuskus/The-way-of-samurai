import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.Header}>
            <img src="https://www.kindpng.com/picc/m/19-196326_logo-blue-free-logos-gratis-png-transparent-png.png"
                 alt="Website logo"/>
        </header>
    );
}

export default Header;