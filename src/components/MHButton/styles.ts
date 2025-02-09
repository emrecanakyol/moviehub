import { StyleSheet } from "react-native";
import { responsive } from "../../utils/responsive/responsive";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: responsive(10),
    },
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
