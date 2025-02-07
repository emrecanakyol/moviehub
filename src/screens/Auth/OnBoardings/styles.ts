import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import { responsive } from "../../../utils/responsive/responsive";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    container: {
        marginHorizontal: responsive(24),
        gap: responsive(30),
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: responsive(20),
    },
    title: {
        fontSize: 32,
        color: colors.WHITE_COLOR,
        fontWeight: "600",
    },
    description: {
        fontSize: 16,
        color: colors.STROKE_COLOR,
        fontWeight: "400",
    },
    dot: {
        height: responsive(10),
        borderRadius: 100,
        marginHorizontal: responsive(2),
    }
});