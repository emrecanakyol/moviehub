import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MHTitle from '../../../../../components/MHTitle';
import MHMovies from '../../../../../components/Cards/MHMovies';
import { styles } from './styles';
import MHButton from '../../../../../components/MHButton';

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
}

interface AllMoviesProps {
    movies: Movie[];
    loading: boolean;
    hasNextPage: boolean;
    loadMoreMovies: () => void;
}

const AllMovies: React.FC<AllMoviesProps> = ({ movies, loading, hasNextPage, loadMoreMovies }) => {

    return (
        <>
            <MHTitle
                title="Filmleri Keşfet"
            // icon="chevron-right"
            />
            <FlatList
                data={movies}
                renderItem={({ item }) => <MHMovies movie={item} />}
                keyExtractor={(item) => item.movie_id.toString()}
                numColumns={2}
                style={styles.container}
                ListFooterComponent={
                    loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : hasNextPage && loading ? (
                        <View style={styles.btnContainer}>
                            <MHButton onPress={loadMoreMovies}>Daha Fazla</MHButton>
                        </View>
                    ) : null
                }
            />
        </>
    );
};

export default AllMovies;
