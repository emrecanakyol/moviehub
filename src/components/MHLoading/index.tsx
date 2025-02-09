import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './style';

const CustomLoading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.RED_COLOR} />
        </View>
    );
};

export default CustomLoading;
