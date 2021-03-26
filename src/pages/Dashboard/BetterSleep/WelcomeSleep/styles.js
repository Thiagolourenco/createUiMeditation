import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03174C"
    },
    stars: {
        ...StyleSheet.absoluteFillObject
    },
    moon: {
        ...StyleSheet.absoluteFillObject,
        left: 70,
        top: 50
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contentTitle: {
        fontSize: 30,
        fontWeight: "700",
        color: "#E6E7F2",
        lineHeight: 41.14
    },
    contentDescription: {
        fontSize: 16,
        fontWeight: "300",
        textAlign: "center",
        lineHeight: 27.04,
        color: "#EBEAEC",
        marginTop: 20
    },  
    svgBird: {
        marginTop: 40,
        marginRight: -90,
    },
    btnGet: {
        position: "absolute",
        bottom: 30
    }
})

export default styles