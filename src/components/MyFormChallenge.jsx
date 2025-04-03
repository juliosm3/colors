import { useState } from "react";
import BoxColor from "./BoxColor";

const colors = [
  "red",
  "green",
  "pink",
  "yellow",
  "purple",
  "white",
  "blue",
  "aqua",
  "olive",
];

function MyForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Type a color..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="color-input"
      />
      <div className="grid">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={inputValue} />
        ))}
      </div>
    </div>
  );
}

export default MyForm;