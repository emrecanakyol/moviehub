import { StyleSheet } from "react-native";
import { responsive } from "../../../utils/responsive/responsive";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: responsive(7),
        margin: responsive(7),
    },
    poster: {
        height: responsive(250),
        borderRadius: responsive(7),
    },
    voteContainer: {
        position: 'absolute',
        top: responsive(10),
        left: responsive(10),
        backgroundColor: colors.RED_COLOR,
        alignItems: "center",
        width: responsive(40),
        borderRadius: responsive(7),
    },
    voteAverage: {
        fontSize: 10,
        color: colors.WHITE_COLOR,
        fontWeight: "500"
    },
});