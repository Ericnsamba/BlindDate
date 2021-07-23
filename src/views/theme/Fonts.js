/**
 * This file contains all application's style relative to fonts
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, FontSize} from './Variables';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

//  export const Fonts = () => {
// return StyleSheet.create({
const textSmall = {
  fontSize: FontSize.small,
  color: Colors.text,
  fontFamily: 'Nunito-Regular',
};
const textRegular = {
  fontSize: FontSize.regular,
  color: Colors.text,
  fontFamily: 'Nunito-Regular',
};
const textMedium = {
  fontSize: FontSize.regular,
  color: Colors.text,
  fontFamily: 'Nunito-SemiBold',
};
const textLarge = {
  fontSize: FontSize.large,
  color: Colors.text,
};
const titleSmall = {
  fontSize: FontSize.small * 2,
  fontWeight: 'bold',
  color: Colors.text,
  fontFamily: 'Nunito-Bold',
};
const titleRegular = {
  fontSize: FontSize.regular * 2,
  fontWeight: 'bold',
  color: Colors.text,
  fontFamily: 'Nunito-Bold',
};
const titleLarge = {
  fontSize: FontSize.large * 2,
  fontWeight: 'bold',
  color: Colors.text,
  fontFamily: 'Nunito-Bold',
};
const textCenter = {
  textAlign: 'center',
};
const textJustify = {
  textAlign: 'justify',
};
const textLeft = {
  textAlign: 'left',
};
const textRight = {
  textAlign: 'right',
};
// });
// };

export {
  textSmall,
  textRegular,
  textMedium,
  textLarge,
  titleSmall,
  titleRegular,
  titleLarge,
  textCenter,
  textJustify,
  textLeft,
  textRight,
};

// export default function ({FontSize, Colors}) {
//   return StyleSheet.create({
//     textSmall: {
//       fontSize: FontSize.small,
//       color: Colors.text,
//       fontFamily: 'Nunito-Regular',
//     },
//     textRegular: {
//       fontSize: FontSize.regular,
//       color: Colors.text,
//       fontFamily: 'Nunito-Black',
//     },
//     textLarge: {
//       fontSize: FontSize.large,
//       color: Colors.text,
//     },
//     titleSmall: {
//       fontSize: FontSize.small * 2,
//       fontWeight: 'bold',
//       color: Colors.text,
//       fontFamily: 'Nunito-Bold',
//     },
//     titleRegular: {
//       fontSize: FontSize.regular * 2,
//       fontWeight: 'bold',
//       color: Colors.text,
//     },
//     titleLarge: {
//       fontSize: FontSize.large * 2,
//       fontWeight: 'bold',
//       color: Colors.text,
//     },
//     textCenter: {
//       textAlign: 'center',
//     },
//     textJustify: {
//       textAlign: 'justify',
//     },
//     textLeft: {
//       textAlign: 'left',
//     },
//     textRight: {
//       textAlign: 'right',
//     },
//   });
// }
