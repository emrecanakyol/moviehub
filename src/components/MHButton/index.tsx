import React from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from './styles';

interface CustomButtonProps {
    onPress: () => void;
    style?: object;
    textStyle?: object;
    children?: React.ReactNode;
    align?: 'flex-start' | 'center' | 'flex-end';
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    style,
    textStyle,
    children,
    align,
    icon,
    loading,
    disabled,
}) => {
    return (
        <View style={[styles.container, align && { alignItems: align }]}>
            <Button
                mode="contained"
                onPress={onPress}
                style={[styles.button, style]}
                labelStyle={[styles.text, textStyle]}
                icon={icon || undefined}
                loading={loading || false}
                disabled={disabled || false}
            >
                {children}
            </Button>
        </View>
    );
};

export default CustomButton;
