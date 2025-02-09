import React from 'react';
import { View, FlatList } from 'react-native';
import MHTitle from '../../../../../components/MHTitle';
import MHMoviesCard from '../../../../../components/Cards/MHMoviesCard';
import { styles } from './styles';
import MHButton from '../../../../../components/MHButton';
import MHLoading from '../../../../../components/MHLoading';
import { MOVIE_LIST } from '../../../../../navigators/Stack';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation<any>();

    const handleIcon = () => {
        navigation.navigate(MOVIE_LIST, { movies, navigation });
    }

    return (
        <>
            {loading ? (<MHLoading />) : (
                <FlatList
                    ListHeaderComponent={
                        <MHTitle
                            title="Filmleri Keşfet"
                            icon="chevron-right"
                            onIconPress={handleIcon}
                        />
                    }
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
            )}
        </>
    );
};

export default AllMovies;
