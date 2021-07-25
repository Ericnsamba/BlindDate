import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Layout from '../../theme/Layout';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

const MenuItem = ({title, iconName, iconSize, onPress = () => {}}) => (
  <View style={styles.container}>
    <View style={styles.block}>
      <Icon name={iconName} size={iconSize} />
      <Text style={[fonts.textMedium, styles.MenuItemText]}>{title}</Text>
    </View>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="chevron-forward" size={iconSize} />
    </TouchableOpacity>
  </View>
);

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  button: {
    // alignSelf: 'flex-end',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  MenuItemText: {
    marginLeft: 10,
  },
});
