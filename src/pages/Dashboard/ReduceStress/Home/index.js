import React from 'react'
import { View, Text, Image, FlatList } from 'react-native' 
import { Entypo } from '@expo/vector-icons';
import { RectButton, ScrollView} from 'react-native-gesture-handler'

import styles from './styles'
import Title from '../../../../assets/Title.png'
import { 
    Basics, 
    Relaxation, 
    VectorOne, 
    VectorTwo, 
    VectorThree,
    Focus,
    Happiness
} from '../../../../assets/svg/Home'

export default function Home() {
    const data = [
        {
            id: 1,
            backgroundColor: 'rgba(132, 198, 174, 0.5)',
            title: 'Focus',
            subTitle: 'MEDITATION * 3-10 MIN',
            svg: <Focus />
        },
        {
            id: 2,
            backgroundColor: '#FEE3B4',
            title: 'Happiness',
            subTitle: 'MEDITATION * 3-10 MIN',
            svg: <Happiness />
        },
        {
            id: 3,
            backgroundColor: 'rgba(132, 198, 174, 0.5)',
            title: 'Focus',
            subTitle: 'MEDITATION * 3-10 MIN',
            svg: <Focus />
        },
        {
            id: 4,
            backgroundColor: '#FEE3B4',
            title: 'Happiness',
            subTitle: 'MEDITATION * 3-10 MIN',
            svg: <Happiness />
        },
    ]

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} onScrollAnimationEnd>
                <View style={styles.headerTitleStyle}>
                    <Text style={styles.textTitle}>Silent</Text>
                        <Image source={Title} style={styles.imageVector}/>
                    <Text style={styles.textTitle}>Moon</Text>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.title}>Good Morning, Afsar</Text>
                    <Text style={styles.subTitle}>We Wish you have a good day</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.contentRow}>
                        <View style={styles.basics}>
                            <View style={styles.svg}>
                                <Basics />
                            </View>

                            <View style={styles.viewTextBasics}>
                                <Text style={styles.textBasics}>Basics</Text>
                                <Text style={styles.textCourse}>COURSE</Text>
                            </View>
                            
                            <View style={styles.footerBtn}>
                                <Text style={styles.textMin}>3 - 10 MIN</Text>
                                <RectButton style={styles.btnStart}>
                                    <Text>Start</Text>
                                </RectButton>
                            </View>
                        </View>
                        <View style={styles.relaxation}>
                            <View style={styles.svg}>
                                <Relaxation />
                            </View>
                            <View style={styles.viewTextRelaxation}>
                                <Text style={[styles.textBasics, { color: "#3F414E"}]}>Basics</Text>
                                <Text style={[styles.textCourse, { color: "#524F53"}]}>COURSE</Text>
                            </View>
                            
                            <View style={styles.footerRelaxtionBtn}>
                                <Text style={[styles.textMin, { color: "#524F53" }]}>3 - 10 MIN</Text>
                                <RectButton style={[styles.btnStart, { backgroundColor: "#3F414E"}]}>
                                    <Text style={[styles.btnStartText, { color: "#FEFFFE"}]}>Start</Text>
                                </RectButton>
                            </View>
                        </View>
                    </View>

                    <View style={styles.daily}>
                        <View style={styles.vectors}>
                            <VectorOne />
                            
                            <View style={styles.viewTextDaily}>
                                <Text style={styles.viewTextTitle}>Daily Thought</Text>
                                <Text style={styles.viewTextSubtitle}>MEDITATION - 3-10 MIN</Text>
                            </View>

                            <View style={styles.svgVectorTwo}>
                                <VectorTwo />
                                <RectButton style={styles.btnPlayer}>
                                    <Entypo name="controller-play" size={24} color="#3F414E" />
                                </RectButton>
                            </View>
                        </View>
                        
                        <View style={styles.svgThree}>
                            <VectorThree />
                        </View>
                        
                    </View>
                </View>

                <View style={styles.footerView}>
                    <Text style={styles.footerTitle}>Recomended for you</Text>

                    <FlatList 
                        data={data}
                        style={styles.list}
                        horizontal
                        keyExtractor={item => String(item.id)}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.viewList}>
                                <View style={styles.bgView}>
                                    {item.svg}
                                </View>

                                <View style={{ marginLeft: 5}}>
                                    <Text style={styles.titleViewList}>{item.title}</Text>
                                    <Text style={styles.subTitleViewList}>{item.subTitle}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}