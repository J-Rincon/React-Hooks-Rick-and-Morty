import React, { createContext, useState } from 'react'

const ThemeContext = createContext(null)

const UseTheme = ({children}) =>{
    const [darkMode, setDarkMode] = useState(true);
    
    const showMode = ()=>{
        setDarkMode(!darkMode)}

    const data = { darkMode, showMode }

    return (
        <UseTheme.Provider value={data}>
                {children}  
        </UseTheme.Provider>
    )
};

export {UseTheme}

export default ThemeContext
