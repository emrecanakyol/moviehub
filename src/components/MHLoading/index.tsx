import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const CustomLoading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.RED_COLOR} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MAIN_COLOR
    },
});

export default CustomLoading;
