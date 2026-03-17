import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () =>{
        try{
            const data = await getMovies();
            setMovies(data);
        }catch{
            console.log("Erro ao buscar filmes:", error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() =>{
        fetchMovies();
    }, []);

    return {
        movies,
        loading,
        refresh: fetchMovies,
    };

};