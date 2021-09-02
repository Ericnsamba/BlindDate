/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from 'react-native';

// import useTranslation from '@/hooks/useTranslation.effect';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack} from '../Home';
import {ProfileStack} from '../Profile';
import {ChatScreen} from '../../views/screens';
import config from '../config/navigation.config';
import * as theme from '../../views/theme/Variables';
import { ChatStack } from '../chatNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  // const { __ } = useTranslation()
  const paddingAnimation = new Animated.Value(0);
  const animatedWidth = new Animated.Value(50);
  const animatedHeight = new Animated.Value(100);

  useEffect(() => {
    // returnn paddingAnimation = new Animated.Value(0);
  }, [paddingAnimation]);

  const animatedBox = () => {
    Animated.timing(animatedWidth, {
      toValue: 44,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedHeight, {
      toValue: 44,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const addPadding = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    // console.log('adding padding animation', paddingAnimation);
    Animated.timing(paddingAnimation, {
      toValue: 10,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const removePadding = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    // console.log('removePadding animation', paddingAnimation);
    Animated.timing(paddingAnimation, {
      toValue: 10,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  // const animatedStyle = {width: animatedWidth, height: animatedHeight};
  const animatedStyle = {padding: paddingAnimation};
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabStyle: {
          paddingTop: 15,
          // backgroundColor: Theme.primaryColors.lightBlue,
        },
        tabBarIcon: ({
          focused,
          color,
          size,
          backgroundColor,
          animatedPadding,
        }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            size = focused ? 24 : 28;
            backgroundColor = focused ? '#CDDFF6' : '#fff';
            color = focused ? theme.Colors.blue : theme.Colors.black;
            // animatedPadding = focused ? animatedBox() : animatedBox();
            // animatedPadding = focused ? addPadding() : removePadding();
            animatedPadding = focused ? removePadding() : addPadding();
          } else if (route.name === 'ChatScreen') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            size = focused ? 24 : 28;
            backgroundColor = focused ? '#CDDFF6' : '#fff';
            // animatedPadding = focused ? addPadding() : removePadding();
            animatedPadding = focused ? removePadding() : addPadding();
            color = focused ? theme.Colors.blue : theme.Colors.black;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? 24 : 28;
            backgroundColor = focused ? '#CDDFF6' : '#fff';
            color = focused ? theme.Colors.blue : theme.Colors.black;
            // animatedPadding = focused ? addPadding() : removePadding();
            animatedPadding = focused ? removePadding() : addPadding();
          }

          return (
            <Animated.View
              style={[
                animatedStyle,
                {
                  // backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: backgroundColor,
                  // padding: paddingAnimation,
                  // padding: 8,
                  borderRadius: 15,
                  // width: paddingAnimation,
                  // height: paddingAnimation,
                },
              ]}>
              <View style={styles.icons}>
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  style={styles.iconItem}
                />
              </View>
            </Animated.View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.tabBarOptions,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="ChatScreen" component={ChatStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarOptions: {
    borderBottomWidth: 0,
    // position: 'absolute',
    bottom: 25,
    // left: 20,
    // right: 20,
    marginHorizontal: 20,
    marginTop: 30,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingBottom: 0,
  },
  shadow: {
    shadowColor: theme.Colors.pink,
    // shadowColor: '#ff00ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.5,
    elevation: 3,
  },
});
