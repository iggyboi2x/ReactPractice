import Loading from "./components/Loading.jsx";
import UserList from "./components/UserList.jsx";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h1>User Directory</h1>

        <input
          type="text"
          placeholder="Search for a specific name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? <Loading /> : <UserList users={filterUser} />}
      </div>
    </>
  );
}

export default App;
