import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils/colors';
import { responsive } from '../../utils/responsive/responsive';

interface CustomButtonProps {
    onPress: () => void;
    style?: object;
    textStyle?: object;
    children?: React.ReactNode;
    align?: 'flex-start' | 'center' | 'flex-end';
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, style, textStyle, children, align }) => {
    return (
        <View style={[styles.container, align && { alignItems: align }]}>
            <Button
                mode="contained"
                onPress={onPress}
                style={[styles.button, style]}
                labelStyle={[styles.text, textStyle]}
            >
                {children}
            </Button>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: responsive(10),
    },
    button: {
        backgroundColor: colors.RED_COLOR,
        width: responsive(140),
        height: responsive(40),
        borderRadius: responsive(4),
        justifyContent: 'center',
    },
    text: {
        color: colors.WHITE_COLOR,
        fontSize: 16,
        fontWeight: '400',
    },
});
