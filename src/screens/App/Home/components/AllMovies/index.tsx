import React, { useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MHTitle from '../../../../../components/MHTitle';
import MHMoviesCard from '../../../../../components/Cards/MHMoviesCard';
import { styles } from './styles';
import MHButton from '../../../../../components/MHButton';
import MHLoading from '../../../../../components/MHLoading';
import { MOVIE_LIST } from '../../../../../navigators/Stack';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../../utils/colors';

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
    loadMovies: () => void;
    refreshing: boolean;
    handleRefresh: () => void;
}

const AllMovies: React.FC<AllMoviesProps> = ({ movies, loading, hasNextPage, loadMoreMovies, loadMovies, refreshing, handleRefresh }) => {
    const navigation = useNavigation<any>();

    const handleIcon = () => {
        navigation.navigate(MOVIE_LIST, { movies, navigation });
    };

    return (
        <>
            {!movies ? (
                <MHLoading />
            ) : (
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
                            <ActivityIndicator size="large" color={colors.RED_COLOR} />
                        ) : hasNextPage ? (
                            <View style={styles.btnContainer}>
                                <MHButton onPress={loadMoreMovies}>Daha Fazla</MHButton>
                            </View>
                        ) : null
                    }
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            )}
        </>
    );
};

export default AllMovies;
