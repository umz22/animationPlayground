import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

// import { mix } from "../components/AnimatedHelpers";
import Card from "../../Components/Card";
import StyleGuide from "../../Components/StyleGuide";

const { width } = Dimensions.get("window");
const origin = - (width / 2 - StyleGuide.spacing * 2);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: StyleGuide.spacing * 4,
  },
});

// interface AnimatedCardProps {
//   transition: Animated.SharedValue<number>;
//   index: number;
//   card: Cards;
// }

const AnimatedCard = ({ card, transition, index }) => {
  
  const style = useAnimatedStyle(() => {
    const rotate = interpolate(transition.value, [0, 1], [0, (index - 1) * 30])

    return {
      transform: [
        { translateX: origin }, 
        { rotate: (rotate + 'deg') }, 
        { translateX: -origin }
    ],
    };
  });

  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Card card={card} />
    </Animated.View>
  );
};

export default AnimatedCard;