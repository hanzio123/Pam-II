import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.log("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    refresh: fetchMovies, 
  };
};

/*
O hook useMovies é responsável por gerenciar o estado dos filmes e o estado de carregamento. 
Ele utiliza a função getMovies do serviço movieService para buscar os dados da API. 
O hook também expõe uma função refresh para permitir que a tela MovieList possa atualizar os dados manualmente, caso necessário.

Como o refresh funciona?
R: A função refresh é simplesmente uma referência à função fetchMovies, que é responsável por buscar os filmes da API. 
Quando a função refresh é chamada, ela executa fetchMovies, que realiza a chamada à API para obter os dados mais recentes dos filmes e atualiza o estado do hook com esses dados. 
Isso permite que a tela MovieList possa solicitar uma atualização dos filmes a qualquer momento, garantindo que os dados exibidos estejam sempre atualizados.
*/