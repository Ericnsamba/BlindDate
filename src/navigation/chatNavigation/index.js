import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen, Messages, Threads} from '../../views/screens';
import config from '../config/navigation.config';

const Stack = createStackNavigator();

export const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={config.ChatStackConfig}
      initialRouteName="Threads">
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Threads" component={Threads} />
    </Stack.Navigator>
  );
};
