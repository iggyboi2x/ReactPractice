import { useEffect } from "react";

function Clear({ text, setText }) {
  const clearInput = () => {
    setText("");
  };
  return (
    <>
      <button onClick={clearInput}>Clear Input</button>
    </>
  );
}

export default Clear;
