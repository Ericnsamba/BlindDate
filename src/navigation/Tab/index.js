import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import useTranslation from '@/hooks/useTranslation.effect';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack} from '../Home';
import {ProfileStack} from '../Profile';
// import {SettingsStack} from '@/navigation/Settings';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  // const { __ } = useTranslation()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
          tabBarLabel: 'Profile',
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
