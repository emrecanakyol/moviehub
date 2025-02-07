import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setCurrentPage } from '../../../store/slice/moviesSlice';
import { AppDispatch } from '../../../store/store';

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
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

const MoviesList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies, loading, hasNextPage, currentPage } = useSelector((state: RootState) => state.movies);  // Redux state'ten verileri çekiyoruz

    console.log(movies)
    const loadMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(fetchMovies(currentPage));
        }
    };

    useEffect(() => {
        loadMovies();
    }, [currentPage]);

    const loadMoreMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const renderMovieItem = ({ item }: { item: Movie }) => {
        return (
            <View style={{ marginBottom: 20 }}>
                <Image source={{ uri: item.poster_path }} style={{ width: 100, height: 150 }} />
                <Text>{item.original_title}</Text>
                <Text>{item.release_date}</Text>
                <Text>{item.overview}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.movie_id.toString()}
                // onEndReached={loadMoreMovies}
                ListFooterComponent={
                    loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : hasNextPage ? (
                        <Button title="Daha Fazla" onPress={loadMoreMovies} />
                    ) : null
                }
            />
        </View>
    );
};

export default MoviesList;
