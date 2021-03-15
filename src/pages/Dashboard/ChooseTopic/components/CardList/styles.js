import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 166.43,
        borderRadius: 10,
        backgroundColor: "#000",
        marginTop: 20, 
        
      },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#F3F9F3",
        marginLeft: 10,
        position: "absolute",
        bottom: 20
      },
    svg: {
        alignSelf: "center"
    }
})

export default styles