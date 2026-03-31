import { api } from "../../../services/api";

// 🔥 lista de possíveis rotas
const POSSIBLE_ROUTES = [
  "/movies",
  "/filmes",
  "/movie",
  "/api/movies",
  "/api/filmes",
];

let workingRoute = null;

// 🔍 descobre automaticamente a rota correta
const findWorkingRoute = async () => {
  for (let route of POSSIBLE_ROUTES) {
    try {
      const response = await api.get(route);
      if (Array.isArray(response.data)) {
        workingRoute = route;
        console.log("Rota encontrada:", route);
        return route;
      }
    } catch (e) {}
  }

  throw new Error("Nenhuma rota válida encontrada");
};

export const getMovies = async () => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }

    const response = await api.get(workingRoute);
    return response.data;
  } catch (error) {
    console.log("Erro GET:", error.message);
    return [];
  }
};

export const createMovie = async (movie) => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }

    const response = await api.post(workingRoute, movie);
    return response.data;
  } catch (error) {
    console.log("Erro POST:", error.message);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }

    await api.delete(`${workingRoute}/${id}`);
  } catch (error) {
    console.log("Erro DELETE:", error.message);
    throw error;
  }
};