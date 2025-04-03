function BoxColor({ color, value }) {
  const isMatch = color.toLowerCase() === value.toLowerCase();

  return (
    <div
      className="box"
      style={{
        backgroundColor: isMatch ? color : "black",
        color: isMatch ? "white" : color,
        border: `2px solid ${color}`,
      }}
    >
      {isMatch ? `Yes, I'm ${color} color` : `I'm not a ${value} color`}
    </div>
  );
}

export default BoxColor;
