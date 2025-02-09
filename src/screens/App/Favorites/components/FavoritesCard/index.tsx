import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import MHButton from '../../../../../components/MHButton';
import { styles } from './styles';

interface FavoritesCardProps {
    item: any;
    onRemove: () => void;
    loading: boolean;
    disabled: boolean;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({ item, onRemove, loading, disabled }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{item.original_title}</Text>
                <Image
                    source={{ uri: item.poster_path }}
                    style={styles.poster}
                />
                <MHButton
                    icon="heart-off"
                    onPress={onRemove}
                    style={styles.removeButton}
                    loading={loading}
                    disabled={disabled}
                >
                    Kaldır
                </MHButton>
            </Card.Content>
        </Card>
    );
};

export default FavoritesCard;
