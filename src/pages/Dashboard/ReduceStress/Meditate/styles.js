import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 60,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 30.27,
        color: "#3F414E"
    },
    headerSubTitle: {
        fontSize: 16,
        color: "#A0A3B1",
        fontWeight: "300",
        lineHeight: 21.62,
        textAlign: "center",
        marginHorizontal: 10,
        marginTop: 10
    },
    selectList: {
        marginTop: 20,
        flexDirection: "row",
        // marginLeft: 10
    },
    viewSelect: {
        alignItems: "center",
        marginLeft: 15
    },
    btnSelect: {
        height: 65,
        width: 65,
        borderRadius: 25,
        backgroundColor: "#8E97FD",
        justifyContent: "center",
        alignItems: "center"
    },
    textSelect: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 17.3,
        color: "#3F414E",
        marginTop: 10
    },
    dailyCalm: {
        height: 95,
        width: 344,
        // backgroundColor: "#000",
        backgroundColor: "rgba(236,211,194,0.5)",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "center"
    },
    dailyCalmContent: {
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewDailyText: {
        marginLeft: 30
    }, 
    dailyTextCalm: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 19.46,
        color: "#3D414E"
    },
    textPauseDaily: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 11.89,
        color: "#5A6175",
        marginTop: 7
    },
    btnPlaying: {
       height: 40,
       width: 40,
       borderRadius: 20,
       backgroundColor: "#3F414E",
       justifyContent: "center",
       alignItems: "center",
       marginRight: 20,
    },
    viewList: {
        marginTop: 10,
        alignSelf: "center"
    }
})

export default styles