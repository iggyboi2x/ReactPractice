import { useState, useEffect } from "react";
import Input from "./components/Input.jsx";
import Display from "./components/Display.jsx";
import Clear from "./components/Clear.jsx";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (text.length === 40) {
      alert("Almost reaching max Input (50)");
    }
    if (text.length === 50) {
      alert("You have reached max input lettercount: Resetting Input...");
      setText("");
    }
  }, [text]);

  return (
    <>
      <Input text={text} setText={setText}></Input>
      <Clear text={text} setText={setText}></Clear>
      <Display text={text} setText={setText}></Display>
    </>
  );
}

export default App;
