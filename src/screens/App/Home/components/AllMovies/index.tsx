import React from 'react';
import { View, FlatList } from 'react-native';
import MHTitle from '../../../../../components/MHTitle';
import MHMoviesCard from '../../../../../components/Cards/MHMoviesCard';
import { styles } from './styles';
import MHButton from '../../../../../components/MHButton';
import MHLoading from '../../../../../components/MHLoading';

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
            {loading ? (<MHLoading />) : (
                <>
                    <MHTitle
                        title="Filmleri Keşfet"
                    // icon="chevron-right"
                    />
                    <FlatList
                        data={movies}
                        renderItem={({ item }) => <MHMoviesCard movie={item} />}
                        keyExtractor={(item) => item.movie_id.toString()}
                        numColumns={2}
                        style={styles.container}
                        ListFooterComponent={
                            loading ? (
                                <MHLoading />
                            ) : hasNextPage && loading ? (
                                <View style={styles.btnContainer}>
                                    <MHButton onPress={loadMoreMovies}>Daha Fazla</MHButton>
                                </View>
                            ) : null
                        }
                    />
                </>
            )}
        </>
    );
};

export default AllMovies;
