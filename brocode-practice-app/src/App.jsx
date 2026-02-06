import List from "./render-lists/List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", foodRating: 3 },
    { id: 2, name: "Banana", foodRating: 4 },
    { id: 3, name: "Coconut", foodRating: 5 },
    { id: 4, name: "Durian", foodRating: 2 },
    { id: 5, name: "Elephant", foodRating: 1 },
  ];

  const vegetables = [
    { id: 6, name: "Asparagus", foodRating: 3 },
    { id: 7, name: "Beetroot", foodRating: 4 },
    { id: 8, name: "Carrot", foodRating: 5 },
    { id: 9, name: "Dinosaur", foodRating: 2 },
    { id: 10, name: "Eggplant", foodRating: 1 },
  ];

  return (
    <>
      <div className="listbody">
        {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
        {vegetables.length > 0 ? (
          <List items={vegetables} category="Vegetables" />
        ) : null}
      </div>
    </>
  );
}

export default App;
