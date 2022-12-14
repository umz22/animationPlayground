import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import StyleGuide from "../../Components/StyleGuide";

const size = 32;

const Bubble = ({ progress, start, end }) => {
    const style = useAnimatedStyle(() => {
      const opacity = interpolate(
        progress.value,
        [start, end],
        [0.5, 1],
        Extrapolate.CLAMP
      );
      const scale = interpolate(
        progress.value,
        [start, end],
        [1, 1.5],
        Extrapolate.CLAMP
      );
      return { opacity, transform: [{ scale }] };
    });
    return <Animated.View style={[styles.bubble, style]} />;
  };
  
  export default Bubble;


  
  const styles = StyleSheet.create({
    bubble: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: StyleGuide.palette.primary,
    },
  });
  