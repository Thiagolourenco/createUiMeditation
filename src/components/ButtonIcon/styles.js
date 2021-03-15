import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  buttonIconContainer: {
    height: 55,
    width: 55,
    borderRadius: 38,
    borderWidth: 1,
    borderColor: "#EBEAEC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(30),
    marginLeft: 15
  }
})

export default styles