import { useState } from "react";
import Button from "./components/Button.jsx";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const handleIncrement = () => {
    setcounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  const handleReset = () => {
    setcounter(0);
  };

  return (
    <Button
      clickIncrement={handleIncrement}
      clickDecrement={handleDecrement}
      clickReset={handleReset}
      count={counter}
    />
  );
}

export default App;
