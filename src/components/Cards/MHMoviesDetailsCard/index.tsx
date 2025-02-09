import React, { useState } from 'react';
import { ScrollView, ImageBackground, View, Share } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import useFavorites from '../../../hooks/useFavorites';
import MHButton from '../../MHButton';

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
    const [loading, setLoading] = useState(false);
    const { toggleFavorite, isFavorite } = useFavorites();
    const formattedDate = new Date(movie.release_date).toLocaleDateString();

    const handleFavoritePress = async () => {
        setLoading(true);
        try {
            await toggleFavorite(movie);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `🎬 ${movie.original_title}\n\n📅 Yayın Tarihi: ${formattedDate}\n⭐ Puan: ${movie.vote_average}/10\n📝 Açıklama: ${movie.overview}`,
            });
        } catch (error) {
            console.log('Paylaşım başarısız:', error);
        }
    };

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
                            Popülerlik: {movie.popularity.toFixed(2)}
                        </Text>
                        <Text variant="bodyLarge" style={styles.voteAverage}>
                            Rating: {movie.vote_average} ({movie.vote_count} votes)
                        </Text>
                    </View>

                    <MHButton
                        icon={isFavorite(movie.movie_id) ? "heart-off" : "heart"}
                        onPress={handleFavoritePress}
                        style={styles.watchButton}
                        loading={loading}
                        disabled={loading}
                    >
                        {isFavorite(movie.movie_id) ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                    </MHButton>

                    <MHButton
                        icon="movie"
                        onPress={() => { }}
                        style={styles.watchButton}
                    >
                        Şimdi İzle
                    </MHButton>

                    <MHButton
                        icon="share-variant"
                        onPress={handleShare}
                        style={styles.watchButton}
                    >
                        Paylaş
                    </MHButton>

                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default MoviesDetailsCard;
