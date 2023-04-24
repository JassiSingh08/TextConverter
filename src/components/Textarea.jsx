import React, { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");

  let changetoUP = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let changetoLO = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  function handleONchange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleONchange}
          value={text}
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={changetoUP}>
          {" "}
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={changetoLO}>
          {" "}
          Convert to Lowercase
        </button>
      </div>
    </>
  );
};

export default Textarea;
