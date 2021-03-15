import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {

  },
  ImageContent: {
    // ...StyleSheet.absoluteFillObject,
    height: scale(430),
    width: "100%"
  },
  Group: {
    height: scale(212.69),
    width: scale(312.22),
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
  },
  imageHeader: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  headerTitleStyle: {
    ...StyleSheet.absoluteFillObject, 
    top: 50,
    justifyContent:"center",
    alignItems: "center",
    height: 40,
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: "center"
  },
  textTitle: {
    fontSize: 16,
    color: "#3F414E",
    fontWeight: "700",
  },
  imageVector: {
    marginHorizontal: 5
  }
})

export default styles