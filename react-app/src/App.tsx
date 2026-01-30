import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Miguel", "Imoogi", "Mogi", "Mogi23"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}

export default App;
