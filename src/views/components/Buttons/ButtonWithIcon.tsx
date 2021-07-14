import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import * as Theme from '../theme/Theme';

export const ButtonWithIcon = ({
  title,
  iconName,
  iconSize,
  onPress = () => {},
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <View style={styles.buttonStyle}>
      <Text style={styles.title}>{title} </Text>
      <Icon name={iconName} size={iconSize} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F7B500',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // width: '100%',
  },
  text: {
    color: '#ccc',
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'center',
    lineHeight: 30,
    flexWrap: 'wrap',
    paddingLeft: 10,
    width: 260,
  },
  title: {
    // color: Theme.secondaryColors.blue,
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
  },
});
