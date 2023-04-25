import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
// import Button from "./components/Button";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textarea
          heading="Enter your text here"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <Button /> */}
      </div>

      {/* <BrowserRouter>
    <Navbar title="TextConverter"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<Textarea heading="Enter your text here"  mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<Button />} />
      </Routes>
      </div>
    </BrowserRouter> */}
    </>
  );
}

export default App;
