import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  //   HomeTabScreensMain,
  //   HomeTabScreensSecond,
} from '../../views/screens';
import config from '../config/navigation.config';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={config.ProfileStackConfig}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      {/* <Stack.Screen name="First" component={HomeTabScreensFirst} />
      <Stack.Screen name="Second" component={HomeTabScreensSecond} /> */}
    </Stack.Navigator>
  );
};
