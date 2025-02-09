import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import MHButton from '../../../components/MHButton';
import styles from './style';

interface Movie {
    movie_id: number;
    original_title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}

interface MovieCardProps {
    item: Movie;
    onPress: () => void;
}

const MovieListCard: React.FC<MovieCardProps> = ({ item, onPress }) => {
    const truncateOverview = (overview: string) => {
        const words = overview.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return overview;
    };

    return (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <Card.Cover source={{ uri: item.poster_path }} style={styles.cardCover} />
                <View style={styles.textContent}>
                    <Title style={styles.title}>{item.original_title}</Title>
                    <Text style={styles.yearText}>{item.release_date}</Text>
                    <Text style={styles.ratingText}>Rating: {item.vote_average}</Text>
                    <Paragraph style={styles.overviewText}>{truncateOverview(item.overview)}</Paragraph>
                    <MHButton onPress={onPress} align="flex-start">Detay</MHButton>
                </View>
            </View>
        </Card>
    );
};

export default MovieListCard;
