import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "./api";
import Movie from "./components/Movie.jsx";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPopularMovies().then((data) => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;

    searchMovies(query).then((data) => setMovies(data.results));
    setQuery("");
  };

  return (
    <>
      <div className="Movie-Explorer">
        <h1>Movie Explorer</h1>
        <form onSubmit={handleSearch} className="Submit-Form">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      <main className="movies-main">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
}

export default App;
