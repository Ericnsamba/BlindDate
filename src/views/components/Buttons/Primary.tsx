import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

interface ButtonsTypes {
  title: string;
  onPress: (event: any) => void;
}

export const PrimaryButton: FC<ButtonsTypes> = ({
  title,
  onPress = () => {},
}) => (
  <LinearGradient
    locations={[0, 1]}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 0}}
    colors={['#FEA7A7', '#167BFA']}
    style={styles.button}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonStyle}>
        <Text style={[fonts.textMedium, styles.title]}>{title} </Text>
      </View>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  button: {
    // backgroundColor: theme.Colors.primary,
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
