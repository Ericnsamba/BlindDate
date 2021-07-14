import {createSwitchNavigator} from 'react-navigation';
import {
  createFluidNavigator,
  FluidNavigator,
  Transition,
} from 'react-navigation-fluid-transitions';
import {createAppContainer} from 'react-navigation';
import ApplicationNavigator from './ApplicationNavigator';
import LoginStackNavigator from './LoginStackNavigator';

const RootStack = createSwitchNavigator(
  {
    ApplicationNavigator,
    LoginStackNavigator,
    // SignUpScreen,
    // ResetPassword,
    // OnboardScreen,
    // BottomTabNavigator,
  },
  {
    initialRouteName: 'ApplicationNavigator',
  },
);
const RootNavigator = createAppContainer(RootStack);
export default RootNavigator;
