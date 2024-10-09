const OMDB_API_KEY = "c4c18555";
const REQUEST_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=`;

interface movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

interface params {
    search: string
}

export const searchMovies = async({search}: params) => {
    if(search === '') return null 
    if(search){
        try {
            const res = await fetch(`${REQUEST_URL}${search}`)
            const json = await res.json()
            const movies = json.Search

            return movies?.map((movie: movie) => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                type: movie.Type,
                poster: movie.Poster,
              }));

        } catch (error) {
            console.log(error);
            throw new Error('Error searching movies');
        }
    }
}