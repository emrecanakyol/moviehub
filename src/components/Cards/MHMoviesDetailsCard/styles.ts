import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import { responsive } from '../../../utils/responsive/responsive';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.MAIN_COLOR,
    },
    backdrop: {
        width: '100%',
        height: responsive(600),
    },
    backdropImage: {
        borderBottomLeftRadius: responsive(25),
        borderBottomRightRadius: responsive(25),
    },
    backButton: {
        position: 'absolute',
        top: responsive(15),
        left: responsive(15),
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: responsive(30),
        padding: responsive(8),
    },
    card: {
        margin: responsive(10),
        borderRadius: responsive(15),
        overflow: 'hidden',
        backgroundColor: colors.MAIN_COLOR,
        elevation: 5,
    },
    poster: {
        height: responsive(400),
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        fontSize: responsive(22),
        color: colors.WHITE_COLOR,
    },
    subtitle: {
        marginTop: responsive(5),
        fontSize: responsive(14),
        color: colors.LIGHT_GRAY,
    },
    overview: {
        marginTop: responsive(10),
        fontSize: responsive(16),
        color: colors.WHITE_COLOR,
        lineHeight: 22,
        textAlign: 'justify',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsive(15),
    },
    popularity: {
        fontSize: responsive(16),
        color: colors.WHITE_COLOR,
    },
    voteAverage: {
        fontSize: responsive(16),
        color: colors.WHITE_COLOR,
    },
    watchButton: {
        marginTop: responsive(20),
        backgroundColor: colors.RED_COLOR,
    },
});
