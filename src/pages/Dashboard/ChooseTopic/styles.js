import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    marginTop: 60,
    marginHorizontal: 30
  },
  titleHeader: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 37.8,
    color: "#3F414E"
  },
  subTitleHeader: {
    fontSize: 28,
    fontWeight: "300",
    lineHeight: 37.8,
    color: "#3F414E"
  },
  list: {
    flexGrow: 1,

    // alignSelf: "center"
  },
  contentText: {
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 23.56,
    color: "#A1A4B2",
    marginHorizontal: 30,
    marginTop: 15
  },
  listView: {
    width: 176.43,
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000"
    // marginTop: 20,
    // marginLeft: 20
  }
})

export default styles