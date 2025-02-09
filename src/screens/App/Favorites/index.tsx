import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import useFavorites from '../../../hooks/useFavorites';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

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
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{item.original_title}</Text>
                <Image
                    source={{ uri: item.poster_path }}
                    style={styles.poster}
                />
                <Button
                    mode="contained"
                    icon="heart-off"
                    onPress={() => toggleFavorite(item)}
                    style={styles.removeButton}
                    loading={loading}
                    disabled={loading}
                >
                    Kaldır
                </Button>
            </Card.Content>
        </Card>
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
