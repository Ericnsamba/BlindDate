import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import * as Theme from '../theme/Theme';

export const PrimaryButton = ({title, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <View style={styles.buttonStyle}>
      <Text style={styles.title}>{title} </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F7B500',
    borderRadius: 10,
    paddingVertical: 15,
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
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
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
