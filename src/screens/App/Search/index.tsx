import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { TextInput, Card, Title, ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { styles } from './styles';


const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { movies, loading } = useSelector((state: RootState) => state.movies);

    const filteredMovies = movies.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderMovieItem = ({ item }: { item: { movie_id: number; original_title: string; poster_path: string } }) => (
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
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator animating={true} size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={filteredMovies}
                    keyExtractor={(item) => item.movie_id.toString()}
                    ListHeaderComponent={
                        <TextInput
                            label="Film Ara"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={styles.searchInput}
                            mode="flat"
                        />
                    }
                    renderItem={renderMovieItem}
                />
            )}
        </View>
    );
};

export default SearchScreen;
