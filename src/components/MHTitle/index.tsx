import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { styles } from './styles';

interface CustomTitleProps {
    title: string;
    icon?: string;
    onIconPress?: () => void;
    style?: object;
}

const CustomTitle: React.FC<CustomTitleProps> = ({ title, icon, onIconPress, style }) => {
    return (
        <Appbar.Header style={[styles.container, style]}>
            <Appbar.Content title={title} titleStyle={styles.title} />
            {icon && (
                <IconButton
                    icon={icon}
                    size={24}
                    onPress={onIconPress}
                    iconColor={colors.RED_COLOR}
                />
            )}
        </Appbar.Header>
    );
};
export default CustomTitle;
