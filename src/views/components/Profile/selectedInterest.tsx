import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Theme from '../../theme/Variables';
import * as Fonts from '../../theme/Fonts';

interface selectedInterestType {
  text: string;
  uniqueKey: number;
}

const SelectedInterest: FC<selectedInterestType> = ({text, uniqueKey}) => (
  <LinearGradient
    locations={[0, 0.5, 0.6]}
    start={{x: 1, y: 0}}
    end={{x: -1, y: 0}}
    colors={['#FEA7A7', '#167BFA']}
    style={styles.container}
    key={uniqueKey}>
    <Text style={[Fonts.textMedium, styles.text]}>{text}</Text>
  </LinearGradient>
);

export default SelectedInterest;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Theme.Colors.lightBlue,
    margin: 2,
    marginBottom: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Theme.Colors.white,
  },
});
