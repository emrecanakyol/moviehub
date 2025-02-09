import { StyleSheet } from 'react-native';
import { responsive } from '../../../utils/responsive/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsive(10),
        backgroundColor: colors.MAIN_COLOR
    },
    card: {
        width: "48%",
        margin: responsive(5),
        borderRadius: responsive(10),
        backgroundColor: colors.WHITE_COLOR,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: responsive(5),
        textAlign: "center",
    },
    poster: {
        width: '100%',
        height: responsive(200),
        borderRadius: responsive(8),
    },
    removeButton: {
        marginTop: responsive(10),
        backgroundColor: colors.RED_COLOR,
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
