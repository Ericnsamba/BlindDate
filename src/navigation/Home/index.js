import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeTabScreensFirst,
  HomeTabScreensMain,
  HomeTabScreensSecond,
} from '../../views/screens';
import config from '../config/navigation.config';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={config.HomeStackConfig}>
      <Stack.Screen name="HomeScreen" component={HomeTabScreensMain} />
      <Stack.Screen name="First" component={HomeTabScreensFirst} />
      <Stack.Screen name="Second" component={HomeTabScreensSecond} />
    </Stack.Navigator>
  );
};
