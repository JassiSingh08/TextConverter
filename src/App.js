import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Button from "./components/Button";
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
     if(mode === 'light'){    
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
    }
    else{    
      setMode('light');
      document.body.style.backgroundColor = "#fff";
     }
  }
  return ( 
    <>
      <Navbar title="TextConverter"  mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Textarea heading="Enter your text here"  mode={mode}/>
        {/* <Button /> */}
      </div>
    </>
  );
}

export default App;
