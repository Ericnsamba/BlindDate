import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  ProfileMenu,
  ProfileInterests,
  Invites,
} from '../../views/screens';
import config from '../config/navigation.config';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={config.ProfileStackConfig}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
      <Stack.Screen name="ProfileInterests" component={ProfileInterests} />
      <Stack.Screen name="Invites" component={Invites} />
    </Stack.Navigator>
  );
};
