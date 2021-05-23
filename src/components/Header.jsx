import React, { useContext } from 'react';
import ThemeContext, { UseTheme } from '../contex/ThemeContext'
import '../assets/components/Header.css';

const Header = (props) => {
    const darkMode= props.darkMode
    const color = useContext(ThemeContext);
    const handleClick = ()=> {
        props.showMode(!darkMode);
    }
    return (
        <div className="header">
             <h1 style={{ color }}>Rick and Morty ReactHooks</h1>
             <button type="button" onClick={handleClick}>{darkMode? 'Ligth Mode':'Dark Mode'}</button>
        </div>
    )
}

export default Header
