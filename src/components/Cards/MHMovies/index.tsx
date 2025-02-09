import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MOVIES_DETAILS } from '../../../navigators/Stack';
import { StackNavigationProp } from '@react-navigation/stack';

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
}

interface MoviesCardProps {
    movie: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movie }) => {
    const navigation = useNavigation<any>();

    const goToDetails = () => {
        navigation.navigate(MOVIES_DETAILS, { movie });
    };

    return (
        <Card style={styles.card}>
            <TouchableOpacity onPress={goToDetails}>
                <Card.Cover source={{ uri: movie.poster_path }} style={styles.poster} />
                <View style={styles.voteContainer}>
                    <Paragraph style={styles.voteAverage}>{movie.vote_average}</Paragraph>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default MoviesCard;
