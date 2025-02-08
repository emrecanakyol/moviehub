import React from 'react';
import { View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { styles } from './styles';

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
}

interface MoviesCardProps {
    movie: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movie }) => {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: movie.poster_path }} style={styles.poster} />
            <View style={styles.voteContainer}>
                <Paragraph style={styles.voteAverage}>{movie.vote_average}</Paragraph>
            </View>
        </Card>
    );
};

export default MoviesCard;
