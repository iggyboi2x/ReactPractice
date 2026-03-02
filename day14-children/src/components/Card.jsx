function Card({ children }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Card;
