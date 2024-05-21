import "./RandomColor.css";
import { useState } from "react";

const RandomColor = () => {
  const [red, setRed] = useState("white");
  const [green, setGreen] = useState("white");
  const [blue, setBlue] = useState("white");

  const generateRandom = () => {
    setRed(Math.random() * 254 + 1);
    setGreen(Math.random() * 254 + 1);
    setBlue(Math.random() * 254 + 1);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        height: "100vh",
        width: "100vw"
      }}
    >
      <button
        onClick={generateRandom}
        style={{
          backgroundColor: `rgb(${255 - red}, ${255 - green}, ${255 - blue})`
        }}
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColor;
