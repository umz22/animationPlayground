import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import Card from '../../Components/Card'

// assets
import card1 from '../../assets/card1.png'

import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withDecay } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

const ratio = 228 / 362;
const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8
const CARD_HEIGHT = CARD_WIDTH * ratio;

export default function PanGesture() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const boundX = width - CARD_WIDTH
  const boundY = height - CARD_HEIGHT

  console.log(width)

  const onGestureEvent = useAnimatedGestureHandler({
    // onStart is used to track where are dragging the component from the start
    onStart: (event, ctx) => {
      // ctx = 'context' object to track the state of the animation
      ctx.offsetX = translateX.value
      ctx.offsetY = translateY.value
    },

    // onActive is used to track the values during the actual gestures/movement
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX
      translateY.value = ctx.offsetY + event.translationY
    },

    onEnd: (event) => {
      translateX.value = withDecay({
        velocity: event.velocityX, 
        clamp: [0, boundX],
      })
      translateY.value = withDecay({
        velocity: event.velocityY, 
        clamp: [0, boundY],
      })
    }
  })

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    }
  })
  return (
    <View style={{flex: 1}}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Card card={card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({})