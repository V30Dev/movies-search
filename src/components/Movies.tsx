import MoviesList from "./MoviesList";

export interface movie {
  id: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

interface props {
  moviesList: movie[];
}

const Movies = ({ moviesList }: props) => {
  const hasResults = moviesList?.length > 0;
  const movies = moviesList;

  return (
    <section>
      {hasResults ? (
        <MoviesList movies={movies} />
      ) : (
        <span>Movies not found</span>
      )}
    </section>
  );
};

export default Movies;
