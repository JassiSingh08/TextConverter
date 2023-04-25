import React, { useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("");

  let HandleUPclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  
  let HandleLOclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  
  let HandleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  
  let HandleSpeech = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "success");
  };
  
  let HandleStopSpeech = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    props.showAlert("Stopped!", "success");
  };
  
  const handleCapitalize = () => {
    let newText = text.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text Capitalized!", "success");
  };
  
  let HandleCopyClick = () => {
    let newText =  document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  
  let HandleExtraSpaces = () => {
    let newText =  text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  function HandleONchange(e) {
    setText(e.target.value);
  }

  let wordsC = () => {
    let wordsCount =
      text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length;

    return wordsCount;
  };

  return (
    <>
      <div className="mb-3" style={{color:props.mode === 'dark'? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={HandleONchange}
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleUPclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleLOclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleSpeech}>
          Speak Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleStopSpeech}>
          Stop Speech
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleClearClick} >
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleCopyClick} >
          Copy Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleExtraSpaces} >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'dark'? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>
          {wordsC()} words and {text.length} character
        </p>
        <p>{0.008 * wordsC()} minutes to read. </p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter Something above to preview it here!"}</p>
      </div>
    </>
  );
};


export default Textarea;
