import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'
import { CardList } from './components'
import {
  ReduceStress, 
  ImprovePerfomance, 
  IncreaseHappiness,
  ReduceAnxiety,
  PersonalGrowth,
  BetterSleep,
  GroupOne,
  GroupTwo
} from '../../../assets/svg/ChooseTopic'

export default function ChooseTopic() {
  const data = [
    {
      id: 1,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#9BA3FF",
      svg: <ReduceStress />,
      top: 0,
      color: "#FFECCC"
    },
    {
      id: 2,
      name: "Improve Performance",
      height: 167,
      backgroundColor: "#FA6E5A",
      svg: <ImprovePerfomance />,
      top: 10,
      color: "#FEF9F3"
    },
    {
      id: 3,
      name: "Increse Happiness",
      height: 167,
      backgroundColor: "#FEB18F",
      svg: <IncreaseHappiness />,
      top: 0,
      color: "#3F414E"
    },
    {
      id: 4,
      name: "Reduce Anxiety",
      height: 210,
      backgroundColor: "#FFCF86",
      svg: <ReduceAnxiety />,
      top: 10,
      color: "#3F414E"
    },
    {
      id: 5,
      name: "Personal Growth",
      height: 210,
      backgroundColor: "#6CB28E",
      svg: <PersonalGrowth />,
      top: 0,
      color: "#FFECCC"
    },
    {
      id: 6,
      name: "Better Sleep",
      height: 167,
      backgroundColor: "#3F414E",
      svg: <BetterSleep />,
      top: 10,
      color: "#EBEAEC"
    },
    {
      id: 7,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#8E97FD",
      svg: <ReduceStress />,
      top: 0,
      color: "#FFECCC"

    },
    {
      id: 8,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#D9A5B5",
      svg: <GroupTwo />,
      top: -10,
      color: "#FFECCC"

    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>What Brings you</Text>
        <Text style={styles.subTitleHeader}>to Silent Moon?</Text>
      </View>

      <Text style={styles.contentText}>choose a topic to focuse on:</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row"}}>
          <View style={{marginRight: 10 }}>
            {data
              .filter((_, i) => i % 2 === 0)
              .map((card) => (
                <CardList 
                  key={card.id} 
                  data={card}
                  height={card.height}
                  backgroundColor={card.backgroundColor}  
                  title={card.name}
                  svg={card.svg}
                  marginTop={card.top}
                  color={card.color}
                />
              ))}

          </View>
          
          <View>
            {data
              .filter((_, i) => i % 2 !== 0)
              .map((card) => (
                <CardList 
                  key={card.id} 
                  height={card.height}
                  backgroundColor={card.backgroundColor}
                  title={card.name}
                  svg={card.svg}
                  marginTop={card.top}
                  color={card.color}
                />
              ))} 
          </View>
          
        </View>
      
      </ScrollView>
    </View>
  )
}