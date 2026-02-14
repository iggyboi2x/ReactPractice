import ProfileCard from "./components/ProfileCard.jsx";
import "./App.css";

const name = "Miggy";
const course = "BSIT";
const bio = "I am a person trying hard to achieve my goals";

function App() {
  return <ProfileCard name={name} course={course} bio={bio} />;
}

export default App;
