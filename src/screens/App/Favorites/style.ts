import { StyleSheet } from 'react-native';
import { responsive } from '../../../utils/responsive/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsive(10),
        backgroundColor: colors.MAIN_COLOR
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    emptyText: {
        fontSize: 18,
        color: colors.GRAY_COLOR,
    },
});
