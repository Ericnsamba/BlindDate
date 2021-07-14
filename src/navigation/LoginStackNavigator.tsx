import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import config from './config/navigation.config';
import {
  SignInScreen,
  SplashScreen,
  SetUserNameScreen,
} from '../views/screens/Auth';

interface Props {
  navigation: {};
  route: {};
  screenOptions: {};
}

const LoginStack = createStackNavigator();

const LoginStackNavigator: React.FC<Props> = ({navigation, route}) => {
  return (
    <LoginStack.Navigator
      screenOptions={config.LoginStackNavigator}
      initialRouteName="SplashScreen">
      <LoginStack.Screen name="SignInScreen" component={SignInScreen} />
      <LoginStack.Screen name="SplashScreen" component={SplashScreen} />
      <LoginStack.Screen
        name="SetUserNameScreen"
        component={SetUserNameScreen}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackNavigator;
