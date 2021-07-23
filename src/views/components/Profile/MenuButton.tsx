import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
// import * as Theme from '../theme/Theme';

const MenuButton = ({title, iconName, iconSize, onPress = () => {}}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name={iconName} size={iconSize} />
    </TouchableOpacity>
  </View>
);

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    alignSelf: 'flex-end',
  },
});
