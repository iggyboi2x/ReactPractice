function Button({ label, color, handleClick }) {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          color: "white",
          padding: "10px",
          margin: "5px",
        }}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}
export default Button;
