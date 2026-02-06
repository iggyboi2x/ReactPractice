function List(props) {
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ASC
  //   fruits.sort((a, b) => b.name.localCompare(a.name)); //DESC
  //   fruits.sort((a,b) => a.foodRating - b.foodRating)); //ASC
  // fruits.sort((a,b) => b.foodRating - a.foodRating)); //DESC

  //   const leastRatedFruits = fruits.filter((fruit) => fruit.foodRating < 3); //makes an array that consist of fruits with foodrating of below 3

  const category = props.category;

  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.foodRating}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
