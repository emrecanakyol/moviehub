import { StyleSheet } from "react-native";
import { responsive } from "../../../utils/responsive/responsive";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsive(10),
        backgroundColor: colors.MAIN_COLOR,
    },
    btnContainer: {
        marginTop: responsive(20),
        marginBottom: responsive(40),
    },
});