import Loading from "./components/Loading.jsx";
import UserList from "./components/UserList.jsx";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json(),
    );
  });

  return <></>;
}

export default App;
