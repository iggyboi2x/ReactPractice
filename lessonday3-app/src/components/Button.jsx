function Button({ clickIncrement, clickDecrement, clickReset, count }) {
  return (
    <>
      <div className="btns">
        <button className="increment-btn" onClick={clickIncrement}>
          ➕
        </button>
        <button className="decrement-btn" onClick={clickDecrement}>
          ➖
        </button>
        <button className="reset-btn" onClick={clickReset}>
          🔄️
        </button>
      </div>

      <div className="countercard">
        <h4 className="counter-txt">Count: {count}</h4>
      </div>
    </>
  );
}

export default Button;
