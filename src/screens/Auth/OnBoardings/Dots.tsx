import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { NavigationProp } from "@react-navigation/native";
import { colors } from "../../../utils/colors";
import { responsive } from "../../../utils/responsive/responsive";
import { styles } from "./styles";

interface Props {
    status: 1 | 2 | 3
}

const Dots: FC<Props> = ({ status }) => {

    const widthShort = responsive(10);
    const widthLong = responsive(30);

    return (
        <View
            style={{ flexDirection: "row" }}>
            <View style={[styles.dot, {
                width: status == 1 ? widthLong : widthShort,
                backgroundColor: status == 1 ? colors.WHITE_COLOR : "gray",
            }]} />
            <View style={[styles.dot, {
                width: status == 2 ? widthLong : widthShort,
                backgroundColor: status == 2 ? colors.WHITE_COLOR : "gray",
            }]} />
            <View style={[styles.dot, {
                width: status == 3 ? widthLong : widthShort,
                backgroundColor: status == 3 ? colors.WHITE_COLOR : "gray",
            }]} />

        </View>
    )
}
export default Dots;