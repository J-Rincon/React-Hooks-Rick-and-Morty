import Header from './components/Header'
import Characters from './container/Characters'
import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
    
    const showMode = ()=>{
        setDarkMode(!darkMode)
    }
  // 
  return (
    <div className={darkMode?"App--dark":"App--ligth"}>
        <Header showMode={showMode} darkMode={darkMode}/>
        <Characters/>
    </div>
  );
}

export default App;
