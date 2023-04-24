import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
      <Navbar title="TextConverter" />
      <div className="container my-3">
        <h2>Enter your text here</h2>
        <Textarea />
      </div>
    </>
  );
}

export default App;
