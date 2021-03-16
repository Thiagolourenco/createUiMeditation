import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 60,
        marginHorizontal: 20
    }, 
    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 32.4,
        color: "#3F414E",
        width: 259
    },
    subTitle: {
        fontWeight: "300",
        fontSize: 16,
        lineHeight: 26.4,
        color: "#A1A4B2",
        marginTop: 10
    },
    viewHour: {
        height: 212,
        width: scale(330),
        backgroundColor: "#cccccc",
        borderRadius: 20,
        marginTop: 20,
        alignSelf: "center"
    },
    content: {
        marginTop: 30,
        marginHorizontal: 20
    },
    viewDays: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20
    },
    day: {
        height: 40.75,
        width: 40.75,
        borderRadius: 20.75,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#A1A4B2",
        marginHorizontal: 5,
    },
    dayText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 23
    },
    footerText: {
        fontSize: 14,
        fontWeight:"400",
        lineHeight: 15.13,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    selectHour: {
        backgroundColor: "#F5F5F9",
        width: scale(330),
        height: scale(63),
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    selectHourText: {
        fontSize: 14,
        color: "#A1A4B2",
        fontWeight: '700'
    }
})

export default styles