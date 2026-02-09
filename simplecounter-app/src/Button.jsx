function Button({ onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <button className="btn" onClick={onDecrement}>
        ➖
      </button>
      <button className="btn" onClick={onReset}>
        ®️
      </button>
      <button className="btn" onClick={onIncrement}>
        ➕
      </button>
    </div>
  );
}

export default Button;
