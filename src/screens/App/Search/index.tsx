import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'

const index = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.MAIN_COLOR }}>
            <Text>Search</Text>
        </View>
    )
}

export default index