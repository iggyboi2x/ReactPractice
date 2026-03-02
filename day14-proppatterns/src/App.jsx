import Button from "./components/Button.jsx";

function App() {
  const handleAdd = () => {
    alert("You pressed Add!");
  };
  const handleDel = () => {
    alert("You pressed Delete!");
  };
  const handleReset = () => {
    alert("You pressed Reset!");
  };

  return (
    <>
      <Button label="Add" color="green" handleClick={handleAdd} />
      <Button label="Delete" color="red" handleClick={handleDel} />
      <Button label="Reset" color="grey" handleClick={handleReset} />
    </>
  );
}

export default App;
