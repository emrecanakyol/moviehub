import React from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import styles from './styles';
import { colors } from '../../../utils/colors';
import MHButton from '../../../components/MHButton';
import { MOVIES_DETAILS } from '../../../navigators/Stack';

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

    const truncateOverview = (overview: string) => {
        const words = overview.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return overview;
    };

    const navigateToDetails = (movie: Movie) => {
        navigation.navigate(MOVIES_DETAILS, { movie });
    };


    const renderMovieItem = ({ item }: { item: Movie }) => (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <Card.Cover source={{ uri: item.poster_path }} style={styles.cardCover} />

                <View style={styles.textContent}>
                    <Title style={styles.title}>{item.original_title}</Title>
                    <Text style={styles.yearText}>{item.release_date}</Text>
                    <Text style={styles.ratingText}>Rating: {item.vote_average}</Text>
                    <Paragraph style={styles.overviewText}>{truncateOverview(item.overview)}</Paragraph>
                    <MHButton onPress={() => navigateToDetails(item)} align="flex-start">Detay</MHButton>
                </View>
            </View>
        </Card>
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
