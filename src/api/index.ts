import API from './API';
import { END_POINTS } from './EndPoints';

export const GetMovies = async (page = 1) => {
    try {
        const response = await API.get(`${END_POINTS.MOVIE.MOVIES}?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};
