import { useEffect } from "react";

function Display({ text }) {
  return (
    <>
      <p>Text Count: {text.length}</p>
    </>
  );
}

export default Display;
