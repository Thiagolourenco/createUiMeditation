import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 80,
        // flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    btnBottom: {
        height: 46,
        width: 46,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#8E97FD"
    },
    textLabel: {
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center"
    }
})

export default styles