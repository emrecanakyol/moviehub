import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { styles } from './style';
import MHMoviesDetailsCard from '../../../components/Cards/MHMoviesDetailsCard';

interface Movie {
    movie_id: number;
    vote_average: number;
    poster_path: string;
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    release_date: string;
    vote_count: number;
}

interface RouteParams {
    movie: Movie;
}

const MovieDetails: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, RouteParams>, 'MovieDetails'>>();
    const { movie } = route.params;

    const goToBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MHMoviesDetailsCard movie={movie} onBackPress={goToBack} />
        </ScrollView>
    );
};

export default MovieDetails;
