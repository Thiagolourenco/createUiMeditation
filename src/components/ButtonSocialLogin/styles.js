import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  buttonContainer: {
    height: scale(63),
    width: scale(324),
    borderRadius: 38,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.13,
  }
})

export default styles