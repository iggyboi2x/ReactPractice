import { useState } from "react";
import Button from "./Button.jsx";
import Display from "./Display.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const resetCount = () => setCount(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <div className="title-div">
        <h1>Miggy's Simple Counter</h1>
      </div>
      <div className="btn-div">
        <Button
          onIncrement={increment}
          onDecrement={decrement}
          onReset={resetCount}
        />
      </div>
      <div className="display-div">
        <Display count={count} />
      </div>
    </>
  );
}
export default App;
