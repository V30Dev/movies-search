import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import Movies from "./components/Movies";
import { useState } from "react";

const App = () => {
  const [sort, setSort] = useState(false);
  const { search, error, handleSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="app-container">
      <h1>Movie Search</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Movie"
            value={search}
            onChange={handleSearch}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies moviesList={movies} />}
      </main>
    </div>
  );
};

export default App;
