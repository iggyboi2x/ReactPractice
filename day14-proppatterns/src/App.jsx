import Button from "./components/Button.jsx";

function App() {
  const handleAdd = () => {
    alert("You pressed Add!");
  };
  const handleDel = () => {
    alert("You pressed Delete!");
  };

  return (
    <>
      <Button label="Add" color="green" handleClick={handleAdd} />
      <Button label="Delete" color="red" handleClick={handleDel} />
    </>
  );
}

export default App;
