import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MOVIES_DETAILS } from '../../../navigators/Stack';
import { styles } from './style';

interface MovieCardProps {
    item: { movie_id: number; original_title: string; poster_path: string };
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(MOVIES_DETAILS, { movie: item });
            }}
        >
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image
                        source={{ uri: item.poster_path }}
                        style={styles.poster}
                    />
                    <Card.Content>
                        <Title style={styles.movieTitle}>{item.original_title}</Title>
                    </Card.Content>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

export default MovieCard;
