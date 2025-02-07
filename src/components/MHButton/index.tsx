import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { responsive } from '../../utils/responsive/responsive';

interface CustomButtonProps {
    onPress: () => void;
    style?: object;
    textStyle?: object;
    children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, style, textStyle, children }) => {
    return (
        <Button
            mode="contained"
            onPress={onPress}
            style={[styles.button, style]}
            labelStyle={[styles.text, textStyle]}
        >
            {children}
        </Button>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
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
