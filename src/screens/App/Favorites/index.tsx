import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import useFavorites from '../../../hooks/useFavorites';
import { colors } from '../../../utils/colors';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './style';
import FavoritesCard from './components/FavoritesCard';

const Favorites = () => {
    const { favorites, toggleFavorite, loading, loadFavorites } = useFavorites();

    // useFocusEffect: Ekran her odaklandığında favorileri yeniden yükle
    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    const renderEmptyList = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Henüz favorilerinize film eklemediniz.</Text>
        </View>
    );

    const renderItem = ({ item }: any) => (
        <FavoritesCard
            item={item}
            onRemove={() => toggleFavorite(item)}
            loading={loading}
            disabled={loading}
        />
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.RED_COLOR} />
            ) : (
                <>
                    {favorites.length === 0 ? (
                        renderEmptyList()
                    ) : (
                        <FlatList
                            data={favorites}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={(item) => item.movie_id.toString()}
                            ListEmptyComponent={renderEmptyList}
                        />
                    )}
                </>
            )}
        </View>
    );
};

export default Favorites;
