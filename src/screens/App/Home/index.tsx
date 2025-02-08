import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { fetchMovies, setCurrentPage } from '../../../store/slice/moviesSlice';
import AllMovies from './components/AllMovies';

interface RootState {
    movies: {
        movies: Movie[];
        loading: boolean;
        hasNextPage: boolean;
        currentPage: number;
    };
}

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
}

const Index: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies, loading, hasNextPage, currentPage } = useSelector((state: RootState) => state.movies);

    const loadMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(fetchMovies(currentPage));
        }
    };

    const loadMoreMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    useEffect(() => {
        loadMovies();
    }, [currentPage]);

    return (
        <AllMovies
            movies={movies}
            loading={loading}
            hasNextPage={hasNextPage}
            loadMoreMovies={loadMoreMovies}
        />
    );
};

export default Index;
