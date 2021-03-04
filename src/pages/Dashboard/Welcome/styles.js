import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E97FD"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    alignSelf: "center"
  },
  imageHeader: {
    height: 25,
    width: 25,
    marginHorizontal: 8
  },
  content: {
    marginTop: 50
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 41.13,
    textAlign: "center",
    color: "#FFECCC"
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "100",
    lineHeight: 41.13,
    textAlign: "center",
    color: "#FFECCC"
  },
  contentDescription: {
    marginTop: 20
  },
  descriptionText:{ 
    fontSize: 16,
    color: "#EBEAEC",
    fontWeight: "300",
    lineHeight: 27.04,
    textAlign: "center",
    marginHorizontal: 30
  },
  groupSvg: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: "40%",
  },
  ellipse12: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center"
  },
  rectangle: {
    // position: "absolute", 
    // bottom: 0, 
    // backgroundColor: "#000", 
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: -102
  },
  VectorCloud: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    top: 150
  },
  VectorBird: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    top: 130,
    right: 80
  }
})

export default styles