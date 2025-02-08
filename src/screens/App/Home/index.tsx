import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setCurrentPage } from '../../../store/slice/moviesSlice';
import { AppDispatch } from '../../../store/store';
import MHMovies from '../../../components/Cards/MHMovies';
import MHButton from '../../../components/MHButton';
import { styles } from './styles';

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

const index: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies, loading, hasNextPage, currentPage } = useSelector((state: RootState) => state.movies);

    //Ekran ilk açıldığında verileri getir
    const loadMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(fetchMovies(currentPage));
        }
    };

    useEffect(() => {
        loadMovies();
    }, [currentPage]);

    //Daha fazla butonuna basıldığında verileri getir
    const loadMoreMovies = () => {
        if (hasNextPage && !loading) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => <MHMovies movie={item} />}
            keyExtractor={(item) => item.movie_id.toString()}
            numColumns={2}
            // onEndReached={loadMoreMovies} //Daha fazla butonu yerine aşağı çekince otomatik sayfa yenilemek için kullanılabilir.
            style={styles.container}
            ListFooterComponent={
                loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : hasNextPage ? (
                    <View style={styles.btnContainer}>
                        <MHButton onPress={loadMoreMovies}>Daha Fazla</MHButton>
                    </View>
                ) : null
            }
        />
    );
};

export default index;
