import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Navbar title="TextConverter" />
      <div className="container my-3">
        <h2>Enter your text here</h2>
        <Textarea />
        <Button />
      </div>
    </>
  );
}

export default App;
