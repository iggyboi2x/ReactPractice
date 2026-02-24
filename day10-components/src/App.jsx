import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <h1>Day 10: Components</h1>
      <Profile componentNo="1" name="Miggy" course="BSIT" />
      <Profile componentNo="2" name="Mary" course="BSA" />
      <Profile componentNo="3" name="Luna" course="BSN" />
    </>
  );
}

export default App;
