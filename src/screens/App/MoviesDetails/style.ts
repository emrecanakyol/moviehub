import { StyleSheet } from 'react-native';
import { responsive } from '../../../utils/responsive/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.MAIN_COLOR,
    },
    card: {
        position: 'relative',
    },
    poster: {
        resizeMode: "contain",
        height: responsive(600),
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    backButton: {
        position: 'absolute',
        top: responsive(1),
        left: responsive(1),
        zIndex: 1,
    },
});
