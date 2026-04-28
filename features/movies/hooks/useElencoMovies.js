import { useState, useEffect } from "react";
import { getElencoMovie } from "../services/movieService";

export const useElencoMovie = (movieId) => {
  const [elenco, setElenco] = useState([]);

  useEffect(() => {
    (async () => {
    const data = await getElencoMovie(movieId);
    setElenco(data);
    })();
  }, []);

  return { elenco };
};