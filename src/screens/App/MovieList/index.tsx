import React from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { MOVIES_DETAILS } from '../../../navigators/Stack';
import { colors } from '../../../utils/colors';
import styles from './styles';
import MHMoviesListCard from '../../../components/Cards/MHMoviesListCard';

interface Movie {
    movie_id: number;
    original_title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}

const MovieList: React.FC = () => {
    const route = useRoute();
    const { movies, navigation } = route.params as { movies: Movie[], navigation: any };

    const goToBack = () => {
        navigation.goBack();
    };

    const navigateToDetails = (movie: Movie) => {
        navigation.navigate(MOVIES_DETAILS, { movie });
    };

    const renderMovieItem = ({ item }: { item: Movie }) => (
        <MHMoviesListCard item={item} onPress={() => navigateToDetails(item)} />
    );

    return (
        <FlatList
            data={movies}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.movie_id.toString()}
            style={styles.container}
            ListHeaderComponent={
                <IconButton
                    icon="chevron-left"
                    size={30}
                    onPress={goToBack}
                    iconColor={colors.WHITE_COLOR}
                />
            }
        />
    );
};

export default MovieList;