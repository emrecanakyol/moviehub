import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';
import { colors } from '../../../utils/colors';
import { styles } from './styles';

interface Movie {
    movie_id: number;
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

interface MovieCardProps {
    movie: Movie;
    onBackPress: () => void;
}

const MoviesDetailsCard: React.FC<MovieCardProps> = ({ movie, onBackPress }) => {
    const formattedDate = new Date(movie.release_date).toLocaleDateString();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={{ uri: movie.poster_path }}
                style={styles.backdrop}
                imageStyle={styles.backdropImage}
            >
                <IconButton
                    icon="chevron-left"
                    size={30}
                    onPress={onBackPress}
                    style={styles.backButton}
                    iconColor={colors.WHITE_COLOR}
                />
            </ImageBackground>

            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="headlineMedium" style={styles.title}>
                        {movie.original_title}
                    </Text>
                    <Text variant="bodyMedium" style={styles.subtitle}>
                        {movie.original_language.toUpperCase()} | Released: {formattedDate}
                    </Text>
                    <Text variant="bodyLarge" style={styles.overview}>
                        {movie.overview}
                    </Text>
                    <View style={styles.detailsRow}>
                        <Text variant="bodyLarge" style={styles.popularity}>
                            Popularity: {movie.popularity.toFixed(2)}
                        </Text>
                        <Text variant="bodyLarge" style={styles.voteAverage}>
                            Rating: {movie.vote_average} ({movie.vote_count} votes)
                        </Text>
                    </View>

                    <Button
                        mode="contained"
                        icon="movie"
                        onPress={() => { }}
                        style={styles.watchButton}
                    >
                        Watch Now
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default MoviesDetailsCard;
