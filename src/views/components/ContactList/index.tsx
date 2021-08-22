import React, {FC} from 'react';
// import {number} from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

interface ContactListTypes {
  name: string;
  number: string;
  uniqueKey: any;
}

export const ContactList: FC<ContactListTypes> = ({
  name,
  number,
  uniqueKey,
}) => (
  <View style={styles.container} key={uniqueKey}>
    <Text style={[fonts.textMedium]}>{name}</Text>
    <Text style={[fonts.textRegular]}>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.greyLight,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 12,
  },
});
