import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
//Types
import { movie } from "../components/Movies";

interface props {
    search: string;
    sort?: boolean;
}

export function useMovies({ search, sort }: props) {
    const [movies, setMovies] = useState<movie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }: props) => {

        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                console.log(error.message)
            } else {
                throw new Error("Unknown error occurred")
            }
        } finally {
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])




    return { movies: sortedMovies, loading, error, getMovies };
};