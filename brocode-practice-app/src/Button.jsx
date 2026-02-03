function Button() {
  const styles = {
    backgroundColor: "bisque",
    color: "cadetblue",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button style={styles}>Click Me</button>
    </>
  );
}

export default Button;
