import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// screens
import PangestureDemo from './Screens/PanGesture/PanGestureDemo'
import TransitionsDemo from './Screens/Transitions/TransitionsDemo';
import Animations from './Screens/HighOrder/Animations'
import CircularSlider from './Screens/CircularSlider/CircularSlider';

const HomeScreen = ({ navigation }) => (
  <PangestureDemo/>
)

const Transitions = ({ navigation }) => (
  <TransitionsDemo/>
)


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PanGesture">
        <Drawer.Screen name="Pan Gesture" component={HomeScreen} />
        <Drawer.Screen name="Transitions" component={Transitions} />
        <Drawer.Screen name="Loading" component={Animations} />
        <Drawer.Screen name="Circular Slider" component={CircularSlider} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}