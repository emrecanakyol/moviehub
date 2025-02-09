import { StyleSheet } from "react-native";
import { responsive } from "../../../utils/responsive/responsive";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsive(10),
        backgroundColor: colors.MAIN_COLOR,
    },
    searchInput: {
        marginTop: responsive(10),
        marginBottom: responsive(20),
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: responsive(7),
    },
    loader: {
        marginTop: responsive(20),
    },
});