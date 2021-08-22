import {Dimensions} from 'react-native';

/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ScreenDimensions = {
  height: windowHeight,
  width: windowWidth,
};

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#333333',
  blue: '#377FD9',
  success: '#2AC02F',
  error: '#dc3545',
  greyLight: '#F6F6F6',
  grey: '#adb5bd',
  lightBlue: '#83CBFB',
  pink: '#FFE2E2',
};

export const NavigationColors = {
  primary: Colors.primary,
  blue: Colors.blue,
};

/**
 * FontSize
 */
export const FontSize = {
  small: 14,
  regular: 16,
  large: 22,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};
