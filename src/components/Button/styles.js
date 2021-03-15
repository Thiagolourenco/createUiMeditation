import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  buttonContainer: {
    height: scale(63),
    width: scale(324),
    // backgroundColor: "#8E97FD",
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30
  },
  buttonText: {
    fontSize: scale(14),
    fontWeight: "400",
    lineHeight: 15.13,
    // color: "#F6F1FB"
  }
})

export default styles