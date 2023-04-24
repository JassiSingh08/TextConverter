import React, { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");

  let HandleUPclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  let HandleLOclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  let HandleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  let HandleSpeech = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  let HandleStopSpeech = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };

  function HandleONchange(e) {
    setText(e.target.value);
  }

  let wordsC = () => {
    let wordsCount =
      text.split(" ")[text.split(" ").length - 1] === ""
        ? text.split(" ").length - 1
        : text.split(" ").length;

    return wordsCount;
  };

  return (
    <>
      <div className="mb-3">
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
        <button className="btn btn-primary my-2 mx-2" onClick={HandleSpeech}>
          Speak Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleStopSpeech}>
          Stop Speech
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleClearClick} >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {wordsC()} words and {text.length} character
        </p>
        <p>{0.008 * wordsC()} minutes to read. </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Textarea;
