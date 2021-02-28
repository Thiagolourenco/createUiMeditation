import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {

  },
  ImageContent: {
    // ...StyleSheet.absoluteFillObject,
    height: 503,
    width: "100%"
  },
  Group: {
    height: 242.69,
    width: 332.22,
    // ...StyleSheet.absoluteFill,
    // backgroundColor: "#000"
  },
  footer: {
    flex: 1,
  },
  footerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3F414E"
  },
  footerSubTitle: {
    fontSize: 16,
    color: "#A1A4B2",
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    width: "80%"
  },
  groupButton: {
    marginTop: 30
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  },
  textCreate: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.13,
    color: "#A1A4B2"
  },
  textBtn: {
    color: "#8E97FD",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15.13,
  }
})

export default styles