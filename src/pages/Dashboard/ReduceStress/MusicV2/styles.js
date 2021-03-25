import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF7F3"
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
    musicImageOne: {
        ...StyleSheet.absoluteFillObject
    },
    musicImageTwo: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "flex-end"
    },
    musicImageThree: {
        bottom: -210

    },
    musicImageFor: {
        bottom: -120
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    contentTitle: {
        fontSize: 34,
        fontWeight: "700",
        color: "#3F414E",
        lineHeight: 36.75
    },
    contentSubTitle: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 15.13,
        color: "#A0A3B1",
        marginTop: 10
    },
    viewGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 50

    }, 
    viewOpacity: {
        height: 109.05,
        width: 109.05,
        backgroundColor: "rgba(186, 188, 198, 0.3)",
        borderRadius: 59,
        justifyContent: "center",
        alignItems: "center"
    },
    btnPause: {
        height: 87.92,
        width: 87.91,
        borderRadius: 50,
        backgroundColor: "#3F414E",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    pauseOneStyle: {
        marginRight: 3
    },
    slider: {
        width: 333.44, 
        height: 40,
        marginTop: 50
    },
    viewMin: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",   
    },
    textValueMin: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 17.3
    }
})

export default styles