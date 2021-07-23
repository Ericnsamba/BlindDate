import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

export const PrimaryButton = ({title, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <View style={styles.buttonStyle}>
      <Text style={[fonts.textRegular, styles.title]}>{title} </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.Colors.primary,
    borderRadius: 50,
    paddingVertical: 15,
    width: '100%',
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
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    color: theme.Colors.white,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
