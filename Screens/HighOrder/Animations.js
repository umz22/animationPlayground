import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import {
  withTiming,
  useSharedValue,
  Easing,
  withRepeat,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

import StyleGuide from "../../Components/StyleGuide";


import ChatBubble from "./ChatBubble";

// const easing = Easing.inOut(Easing.ease);

const Timing = () => {
    const [play, setPlay] = useState(false)
    const paused = useSharedValue(!play)
    const progress = useSharedValue(0)

    return (
        <View style={styles.container}>
            <ChatBubble
                progress={progress} />
            <Button
                title={play ? "Pause" : "Play"}
                primary
                onPress={() => {
                    setPlay((prev) => !prev)
                    paused.value = !paused.value
                    // with repeat takes in 3 arguements:
                    //  1. animation 2. number of reps (-1 means infinite), reverse?(boolean)
                    if (progress.value === 0) {
                        progress.value =
                        withPause(
                            withRepeat(
                                withTiming(1, {
                                    duration: 1000,
                                    easing: Easing.inOut(Easing.ease)
                                }), -1, true),
                            paused)
                    }
                }}
            />
        </View>
    );
};

export default Timing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: StyleGuide.palette.background,
    },
  });