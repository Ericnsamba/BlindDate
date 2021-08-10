import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Theme from '../../theme/Variables';
import * as Fonts from '../../theme/Fonts';

interface selectedInterestType {
  text: string;
  uniqueKey: number;
}

const SelectedInterest: FC<selectedInterestType> = ({text, uniqueKey}) => (
  <View style={styles.container} key={uniqueKey}>
    <Text style={[Fonts.textRegular]}>{text}</Text>
  </View>
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
});
