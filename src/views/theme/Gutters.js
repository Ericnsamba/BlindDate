import {StyleSheet} from 'react-native';

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
import MetricsSizes from './Variables';

/* Margins */
export const BMargin = {
  // marginBottom: MetricsSizes.regular,
};
// export const TMargin = {
//   marginTop: value,
// };
// export const RMargin = {
//   marginRight: value,
// };
// export const LMargin = {
//   marginLeft: value,
// };
// export const VMargin = {
//   marginVertical: value,
// };
// export const HMargin = {
//   marginHorizontal: value,
// };
// /* Paddings */
// export const BPadding = {
//   paddingBottom: value,
// };
// export const TPadding = {
//   paddingTop: value,
// };
// export const RPadding = {
//   paddingRight: value,
// };
// export const LPadding = {
//   paddingLeft: value,
// };
// export const VPadding = {
//   paddingVertical: value,
// };
// export const HPadding = {
//   paddingHorizontal: value,
// };
