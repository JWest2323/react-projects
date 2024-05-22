import "./RandomColor.css";
import { useState, useEffect } from "react";
import React from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomUtil = length => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHEXColor = () => {
    // #000000
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtil(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRGBColor = () => {
    const r = randomUtil(256);
    const g = randomUtil(256);
    const b = randomUtil(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (colorType === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHEXColor();
  }, [colorType]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}
    >
      <div className="button-container">
        <button onClick={() => setColorType("hex")}>Create HEX Button</button>
        <button onClick={() => setColorType("rgb")}>Create RGB Button</button>
        <button
          onClick={
            colorType === "hex"
              ? handleCreateRandomHEXColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div className="color-contents">
        <h3>{colorType === "hex" ? "HEX" : "RGB"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
