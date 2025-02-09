import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Movie {
    movie_id: number;
}

const FAVORITES_KEY = 'favorite_movies';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            setError('Favorileri yüklerken hata oluştu');
            console.error('Favorileri yüklerken hata oluştu:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    const toggleFavorite = async (movie: Movie) => {
        try {
            setFavorites((prevFavorites) => {
                const isFavorite = prevFavorites.some((fav) => fav.movie_id === movie.movie_id);
                let updatedFavorites;

                if (isFavorite) {
                    updatedFavorites = prevFavorites.filter((fav) => fav.movie_id !== movie.movie_id);
                } else {
                    updatedFavorites = [...prevFavorites, movie];
                }

                AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
                return updatedFavorites;
            });
        } catch (error) {
            setError('Favorileri güncellerken hata oluştu');
            console.error('Favorileri güncellerken hata oluştu:', error);
        }
    };

    const isFavorite = (movieId: number) => {
        return favorites.some((fav) => fav.movie_id === movieId);
    };

    return { favorites, toggleFavorite, isFavorite, loading, error, loadFavorites };
};

export default useFavorites;
