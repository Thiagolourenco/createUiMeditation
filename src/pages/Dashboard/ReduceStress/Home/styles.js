import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1
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
      },
    viewText: {
        marginTop: 120,
        marginLeft: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 30.27,
        color: "#3F414E"
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "300",
        lineHeight: 21.62,
        color: "#A1A4B2",
        marginTop: 10
    },
    content: {
        alignSelf: 'center',
        marginTop: 20
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    basics: {
      height: 210,
      width: 155,
      borderRadius: 20,
      backgroundColor: "#8E97FD"  
    },
    relaxation: {
      height: 210,
      width: 155,
      borderRadius: 20,
      backgroundColor: "#FFC97E"  
    },
    daily: {
        height: 95,
        width: 340,
        borderRadius: 20,
        backgroundColor: "#333242",
        marginTop: 20,
        
    },
    viewTextDaily: {
        position: "absolute",
        top: 25,
        left: 25,
        alignSelf: "center"
    },
    viewTextTitle: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "700",
        lineHeight: 19.46
    },  
    viewTextSubtitle: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 11.89,
        color: "#EBEAEC",
        marginTop: 10
    },
    svgVectorTwo: {
        flex: 1,
        alignItems: "flex-end"
    },
    vectors: {
        flex: 1, 
        flexDirection: "row"
    },
    btnPlayer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 25,
        right: 20
    },
    svgThree: {
        alignSelf: 'center', 
        marginLeft: 30
    },  
    svg: {
        alignSelf: "flex-end"
    },
    viewTextBasics: {
        marginLeft: 10
    },
    viewTextRelaxation: {
        position: "absolute",
        top: 90,
        left: 10
    }, 
    textBasics: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFECCC",
        lineHeight: 19.46
    },
    textCourse: {
        fontSize: 11,
        fontWeight: "400",
        color: "#F7E8D0",
        marginTop: 5
    },
    footerBtn: {
        flexDirection: "row",
        // position: "absolute",
        marginTop: 25,
        justifyContent: "space-around",
        alignItems:"center"
    },
    footerRelaxtionBtn: {
        flexDirection: "row",
        // position: "absolute",
        marginTop: -18,
        justifyContent: "space-around",
        alignItems:"center"
    },
    textMin: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 11.89,
        color: "#EBEAEC"
    },
    btnStart: {
        height: 35,
        width: 70,
        borderRadius: 25,
        backgroundColor: "#EBEAEC",
        justifyContent: "center",
        alignItems: "center"
    },
    btnStartText: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 12.97,
        color: "#3F414E"
    },
    footerView: {
        marginTop: 20,
        marginLeft: 8,
        marginBottom: 20
    },
    footerTitle: {
        fontSize: 24,
        fontWeight: "400",
        lineHeight: 25.94,
        color: "#3F414E",
        marginLeft: 10
    },
    list: {
        marginTop: 10
    }, 
    viewList: {
        height: height * 0.22,
        width: width * 0.33 + 20,
        marginHorizontal: 10,
        // position: "absolute"
    },
    bgView: {
        // height: 133.,
        
        borderRadius: 20
    },
    titleViewList: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 19.46,
        color: "#3F414E",
        marginTop: 5
    },
    subTitleViewList: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 11.89,
        color: "#A1A4B2",
        marginTop: 5
    }

})

export default styles