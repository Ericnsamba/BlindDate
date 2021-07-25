import {StyleSheet, Dimensions} from 'react-native';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */



/* Column Layouts */
export const column = {
  flexDirection: 'column',
};
export const columnReverse = {
  flexDirection: 'column-reverse',
};
export const colCenter = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
export const colVCenter = {
  flexDirection: 'column',
  alignItems: 'center',
};
export const colHCenter = {
  flexDirection: 'column',
  justifyContent: 'center',
};
/* Row Layouts */
export const row = {
  flexDirection: 'row',
};
export const rowReverse = {
  flexDirection: 'row-reverse',
};
export const rowCenter = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
export const rowVCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
};
export const rowHCenter = {
  flexDirection: 'row',
  alignItems: 'center',
};
/* Example Layouts */
export const center = {
  alignItems: 'center',
  justifyContent: 'center',
};
export const alignItemsCenter = {
  alignItems: 'center',
};
export const alignItemsStart = {
  alignItems: 'flex-start',
};
export const alignItemsStretch = {
  alignItems: 'stretch',
};
export const justifyContentCenter = {
  justifyContent: 'center',
};
export const justifyContentAround = {
  justifyContent: 'space-around',
};
export const justifyContentBetween = {
  justifyContent: 'space-between',
};
export const scrollSpaceAround = {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween = {
    flexGrow: 1,
    justifyContent: 'space-between',
  };
export const selfStretch = {
  alignSelf: 'stretch',
};
/* Sizes Layouts */
export const fill = {
  flex: 1,
};
export const fullSize = {
  height: '100%',
  width: '100%',
};
export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
/* Operation Layout */
export const mirror = {
  transform: [{scaleX: -1}],
};
export const rotate90 = {
  transform: [{rotate: '90deg'}],
};
export const rotate90Inverse = {
  transform: [{rotate: '-90deg'}],
};
