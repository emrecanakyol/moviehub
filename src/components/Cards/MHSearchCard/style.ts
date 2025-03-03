import { StyleSheet } from "react-native";
import { responsive } from "../../../utils/responsive/responsive";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.MAIN_COLOR,
    },
    searchInput: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: responsive(7),
    },
    loader: {
        marginTop: 20,
    },
    card: {
        marginBottom: 10,
        backgroundColor: colors.TEXT_MAIN_COLOR,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    poster: {
        width: 50,
        height: 75,
        borderRadius: 5,
        marginRight: 10,
    },
    movieTitle: {
        color: colors.WHITE_COLOR,
    },
});