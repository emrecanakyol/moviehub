import { StyleSheet } from 'react-native';
import { responsive } from '../../../utils/responsive/responsive';
import { colors } from '../../../utils/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.MAIN_COLOR,
    },
    card: {
        marginBottom: responsive(15),
        marginHorizontal: responsive(10),
    },
    cardContent: {
        flexDirection: 'row',
        padding: responsive(10),
    },
    cardCover: {
        width: responsive(120),
        height: responsive(180),
        marginRight: responsive(15),
    },
    textContent: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    yearText: {
        fontSize: 14,
        color: colors.GRAY_COLOR,
    },
    directorText: {
        fontSize: 14,
        color: colors.GRAY_COLOR,
    },
    ratingText: {
        fontSize: 14,
        color: colors.GREEN_COLOR,
        fontWeight: 'bold',
    },
    overviewText: {
        marginTop: 10,
        fontSize: 14,
        color: colors.BLACK_COLOR,
    },
});

export default styles;
