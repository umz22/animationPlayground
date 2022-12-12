import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AnimatedCard from './AnimatedCard'
import StyleGuide from '../../Components/StyleGuide'
import { useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

// assets
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

    const cards = [
        {source: card1},
        {source: card2},
        {source: card3},
    ]


export default function TransitionsDemo() {

    // hook for withSpring
    const useSpring = (state, config) => {
        const value = useSharedValue(0)

        useEffect(() => {
            value.value = typeof state === "number" ? state : (state ? 1 :0)
          }, [state, value])
          
           return useDerivedValue(() => {
              return withSpring(value.value, config)
          })
    }

    // hook for withTiming
    const useTiming = (state, config) => {
        const value = useSharedValue(0)

        useEffect(() => {
            value.value = typeof state === "number" ? state : (state ? 1 :0)
          }, [state, value])
          
           return useDerivedValue(() => {
            // config is used for things like duration
              return withTiming(value.value, config)
          })
    }

    // you can trigger the toggle based off states or useSharedValue:

    // <!-- value based toggle -->
    // const toggled = useSharedValue(false)
    // const transition = useDerivedValue(() => {
    //     return withSpring(toggled.value)
    // })


    // <!-- state based toggle -->
    const [toggled, setToggle] = useState(false)
    const transition = useTiming(toggled, { duration: 600 })
    

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <AnimatedCard 
          key={card.source} 
          index={index} 
          card={card.source} 
          transition={transition}/>
      ))}
      <Button
        title={toggled ? "Reset" : "Start"}
        primary
        // onPress={() => (toggled.value = !toggled.value)}
        onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: StyleGuide.palette.background,
      justifyContent: "flex-end",
    },
  });
  