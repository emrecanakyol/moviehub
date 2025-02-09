import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import { responsive } from '../../../utils/responsive/responsive';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MAIN_COLOR,
        padding: responsive(20),
    },
    header: {
        alignItems: 'center',
        marginBottom: responsive(20),
    },
    profileImage: {
        width: responsive(100),
        height: responsive(100),
        borderRadius: responsive(50),
        borderWidth: responsive(3),
        borderColor: colors.WHITE_COLOR,
        marginBottom: responsive(10),
    },
    userInfo: {
        alignItems: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.WHITE_COLOR,
    },
    userEmail: {
        fontSize: 14,
        color: colors.WHITE_COLOR,
    },
    editIcon: {
        position: 'absolute',
        top: responsive(10),
        right: responsive(10),
        backgroundColor: colors.MAIN_COLOR,
        borderRadius: responsive(20),
    },
    button: {
        marginBottom: responsive(15),
        borderRadius: responsive(8),
        width: '100%',
    },
    divider: {
        marginVertical: responsive(15),
    },
});

export default styles;
