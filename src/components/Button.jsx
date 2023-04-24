import React, { useState } from "react";

const Button = () => {
  const [ToggleTheme, setToggleTheme] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const toggleStyle = () => {
    if (ToggleTheme.color === "white") {
      setToggleTheme({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setToggleTheme({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <button
      className="btn btn-primary my-2 mx-2"
      onClick={toggleStyle}
      style={ToggleTheme}
    >
      Switch Theme
    </button>
  );
};

export default Button;
