import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { fetchMovies, setCurrentPage, setRefreshing } from '../../../store/slice/moviesSlice';
import AllMovies from './components/AllMovies';

interface RootState {
    movies: {
        movies: Movie[];
        loading: boolean;
        hasNextPage: boolean;
        currentPage: number;
        refreshing: boolean;
    };
}

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
}

const Index: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies, loading, hasNextPage, currentPage, refreshing } = useSelector(
        (state: RootState) => state.movies
    );

    const loadMovies = () => {
        if (!loading) {
            dispatch(fetchMovies(currentPage));
        }
    };

    const loadMoreMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const handleRefresh = () => {
        dispatch(setRefreshing(true));
        dispatch(setCurrentPage(1));
        dispatch(fetchMovies(1));
    };

    useEffect(() => {
        loadMovies();
    }, [currentPage]);

    useEffect(() => {
        if (refreshing) {
            dispatch(setRefreshing(false));
        }
    }, [refreshing, dispatch]);

    return (
        <AllMovies
            movies={movies}
            loading={loading}
            hasNextPage={hasNextPage}
            loadMoreMovies={loadMoreMovies}
            loadMovies={loadMovies}
            refreshing={refreshing}
            handleRefresh={handleRefresh}
        />
    );
};

export default Index;
