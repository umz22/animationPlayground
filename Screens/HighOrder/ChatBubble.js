import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Bubble from './Bubble';


const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;


export default function ChatBubble({progress}) {
    
    const bubbles = [0, 1, 2]
    const delta = 1 / bubbles.length


    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {bubbles.map((i) => {
                    const start = i * delta;
                    const end = start + delta;
                    return <Bubble key={i} {...{ start, end, progress }} />;
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      height: width,
      width,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#d3d3d3",
      borderTopLeftRadius: width / 2,
      borderTopRightRadius: width / 2,
      borderBottomLeftRadius: width / 2,
    },
  });