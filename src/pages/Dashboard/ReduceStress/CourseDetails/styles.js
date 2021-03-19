import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {

    },
    headerButton: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
        alignItems: "center",
        top: 50,
        marginHorizontal: 20
    },
    buttonArrowBack: {
        height: 55,
        width: 55,
        borderRadius: 38,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center",
    },
    viewGroupButton: {
        flexDirection: "row",
        marginRight: 40
    },
    content: {
        marginTop: 30,
        marginLeft: 20
    },
    title: {
        fontSize: 34,
        fontWeight: "700",
        lineHeight: 36.75,
        color: "#3F414E"   
    },
    textCourse: {
        fontWeight: 14,
        fontWeight: "400",
        lineHeight: 15.13,
        color: "#A1A4B2",
        marginTop: 8
    },
    textDescription: {
        fontSize: 16,
        fontWeight: "300",
        lineHeight: 23.22,
        color: "#A1A4B2",
        marginTop: 15
    },
    textViews: {
        fontWeight: 14,
        fontWeight: "400",
        lineHeight: 15.13,
        color: "#A1A4B2",
        marginLeft: 10
    },
    viewStatusViews: {
        flexDirection: "row",
        marginTop: 30,

    },
    viewContentViews: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleContent: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 21.62,
        color: "#3F414E",
        marginTop: 40
    },
    viewHeader: {
        flexDirection: "row",
        marginTop: 10
        // justifyContent: "space-evenly",
    },
    btnActiveMale: {
        height: 40,
        width: 150,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
    },
    viewBorder: {
        // height: 40,
        width: 46.85,
        borderBottomWidth: 2,
        borderBottomColor: "#8E97FD",
        paddingTop: 10,
    },
    viewRow: {
        borderBottomColor: "#E4E6FD",
        borderBottomWidth: 1,
        flex: 1,
        marginLeft: -20
        // width: "100%"
    },
    viewPlaying: {
        height: 30,
        width: 178.44,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderColor: "#A1A4B2",
    },
    titlePlaying: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 17.3,
        color: "#3F414E"
    },
    subTitlePlaying: {
        fontSize: 11,
        fontWeight: "400",
        color: "#A1A4B2",
        lineHeight: 11.89,
        marginTop: 5
    },
    viewLine: {
        borderBottomColor: "rgba(173, 184, 217, 0.15)",
        borderBottomWidth: 1,
        flex: 1,
        marginLeft: -20,
        marginTop: 25
    }
})

export default styles