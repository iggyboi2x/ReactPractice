import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network response not ok...");
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="status">
        <h1>Day 18: Fetching APIs</h1>
        <h2>Loading users...</h2>
      </div>
    );
  if (error)
    return (
      <div className="status">
        <h1>Day 18: Fetching APIs</h1>
        <h2>Error: {error}</h2>
      </div>
    );
  return (
    <>
      <div className="container">
        <h1>Day 18: Fetching APIs</h1>

        <div className="userGrid">
          {users.slice(0, 5).map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>City:</strong> {user.address.city}
              </p>

              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
