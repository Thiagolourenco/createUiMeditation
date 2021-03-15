import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 28,
    color: "#3F414E",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 37.8,
    marginTop: scale(5)
  },
  viweGroupButton: {
    marginTop: scale(15)
  },
  textLog: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 15.13,
    color: "#A1A4B2",
    marginTop: 30
  },
  viweGroupInput: {
    marginTop: 20
  },
  input: {
    backgroundColor: "#F2F3F7",
    height: scale(63),
    width: scale(324),
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#A1A4B2",
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 15
  },
  textForgot: {
    textAlign: "center",
    fontSize: 14,
    color: "#3F414E",
    fontWeight: "400",
    marginTop: 20
  },
  viewFooter: {
    // position: "absolute",
    // bottom: scale(10),
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row"
  },
  footer: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15.13,
    textAlign: "center",
    color: "#A1A4B2"
  },
  footerSignUp: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15.13,
    textAlign: "center",
    color: "#8E97FD"
  },
  headerVector: {
    position: "absolute", 
    flexDirection:  "row", 
    justifyContent: "space-between", 
    width: "100%"
  },
  footerVector: {
    position: "absolute", 
    flexDirection:  "row", 
    justifyContent: "space-between", 
    width: "100%",
    top: "20%"
  }
})

export default styles