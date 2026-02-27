function Input({ text, setText }) {
  return (
    <>
      <input
        type="text"
        placeholder="enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Input;
