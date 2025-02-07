import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Image, ActivityIndicator } from 'react-native';
import { GetMovies } from '../../../api';

interface Movie {
    movie_id: number;
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

interface MovieApiResponse {
    data: Movie[];
    links: {
        next_page_url: string | null;
    };
}

const index: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);

    const fetchMovies = async (page: number) => {
        try {
            setLoading(true);
            const response: MovieApiResponse = await GetMovies(page);
            const newMovies = response.data;
            setMovies((prevMovies) => [...prevMovies, ...newMovies]);
            setHasNextPage(response.links.next_page_url !== null);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const loadMoreMovies = () => {
        if (hasNextPage && !loading) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const renderMovieItem = ({ item }: { item: Movie }) => {
        return (
            <View style={{ marginBottom: 20 }}>
                <Image source={{ uri: item.poster_path }} style={{ width: 100, height: 150 }} />
                <Text>{item.original_title}</Text>
                <Text>{item.release_date}</Text>
                <Text>{item.overview}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.movie_id.toString()}
                // onEndReached={loadMoreMovies}
                ListFooterComponent={
                    loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : hasNextPage ? (
                        <Button title="Daha Fazla" onPress={loadMoreMovies} />
                    ) : null
                }
            />

        </View>
    );
};

export default index;