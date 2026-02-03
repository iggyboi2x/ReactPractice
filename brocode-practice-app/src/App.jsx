import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Miguel" age={21} isStudent={true} />
      <Student name="Aaron" age={20} isStudent={true}></Student>
      <Student name="Vilgax" age={19} isStudent={true}></Student>
    </>
  );
}

export default App;
