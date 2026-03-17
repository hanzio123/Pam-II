import {api} from "../../service/api";
            
export const getMovies = async () => {
    const response = await api.get("/filmes");
    return response.data;
}