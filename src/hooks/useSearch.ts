import { useEffect, useState, useRef } from "react";

export function useSearch () {
    const [search, setSearch] = useState("");
    const [error, setError] = useState<string | null>(null);
    const isFirstInput = useRef(true)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    };

    useEffect(()=>{

        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }

        if (search === "") {
            setError("Can't search a void movie");
            return;
            }
    
            if (search.length <= 1) {
            setError("Can't search a movie with one letter");
            return;
            }
    
            setError(null);
    },[search])

    return {search, error, handleSearch}
}