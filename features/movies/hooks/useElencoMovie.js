import { useState, useState } from "react";
import { getElencoMovie } from "../services/movieservice";

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