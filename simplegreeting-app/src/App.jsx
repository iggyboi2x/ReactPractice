import "./App.css";

function App() {
  const name = "Miggy";
  const course = "BSIT";
  const dateToday = new Date().toDateString();

  return (
    <>
      <h1 className="title">Simple Greeting</h1>
      <h4>
        Hello, I am {name}, a {course} Student <br /> The Date today is
        {dateToday}
      </h4>
    </>
  );
}

export default App;
