import { movie } from "./Movies";

interface props {
  movies: movie[];
}

const MoviesList = ({ movies }: props) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>
            {movie.type} | {movie.year}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
