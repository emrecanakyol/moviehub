
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GetMovies } from '../../api';

interface Movie {
    movie_id: number;
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

interface MoviesState {
    movies: Movie[];
    loading: boolean;
    hasNextPage: boolean;
    currentPage: number;
}

const initialState: MoviesState = {
    movies: [],
    loading: false,
    hasNextPage: true,
    currentPage: 1,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (page: number) => {
        const response = await GetMovies(page);
        return response;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = [...state.movies, ...action.payload.data];
                state.hasNextPage = action.payload.links.next_page_url !== null;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;
