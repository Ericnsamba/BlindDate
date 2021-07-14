import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  //   HomeTabScreensMain,
  //   HomeTabScreensSecond,
} from '../../views/screens';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      {/* <Stack.Screen name="First" component={HomeTabScreensFirst} />
      <Stack.Screen name="Second" component={HomeTabScreensSecond} /> */}
    </Stack.Navigator>
  );
};
