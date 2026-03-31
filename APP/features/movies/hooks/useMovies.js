import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../services/movieService";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data || []);
    } catch (error) {
      console.log("Erro ao buscar filmes:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 função para deletar um filme
  const removeMovie = async (id) => {
    try {
      await deleteMovie(id);
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log("Erro ao deletar filme:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, refresh: fetchMovies, removeMovie };
}