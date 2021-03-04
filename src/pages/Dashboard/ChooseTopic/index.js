import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './styles'

export default function ChooseTopic() {
  const data = [
    {
      id: 1,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#9BA3FF"
    },
    {
      id: 2,
      name: "Improve Performance",
      height: 167,
      backgroundColor: "#FA6E5A"
    },
    {
      id: 3,
      name: "Increse Happiness",
      height: 167,
      backgroundColor: "#FEB18F",
      top: 20
    },
    {
      id: 4,
      name: "Reduce Anxiety",
      height: 210,
      backgroundColor: "#FFCF86"
    },
    {
      id: 5,
      name: "Personal Growth",
      height: 210,
      backgroundColor: "#6CB28E"
    },
    {
      id: 6,
      name: "Better Sleep",
      height: 167,
      backgroundColor: "#3F414E"
    },
    {
      id: 7,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#8E97FD"
    },
    {
      id: 8,
      name: "Reduce Stress",
      height: 210,
      backgroundColor: "#D9A5B5"
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>What Brings you</Text>
        <Text style={styles.subTitleHeader}>to Silent Moon?</Text>
      </View>

      <Text style={styles.contentText}>choose a topic to focuse on:</Text>

      <FlatList 
        data={data}
        style={styles.list}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => (
          <View 
            style={[
              styles.listView, 
              { backgroundColor: item.backgroundColor, 
                height: item.height,
                marginTop: item.top
              }]
          }/>
        )}
      />
    </View>
  )
}