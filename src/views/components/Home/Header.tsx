import React, {FC} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';
import * as layout from '../../theme/Layout';

interface HeaderTypes {
  userName: string;
  image: string;
}

export const Header: FC<HeaderTypes> = ({userName, image}) => (
  <View style={[layout.row, styles.headerContainer]}>
    <Text style={(fonts.textCenter, fonts.textMedium, styles.username)}>
      Howdy, {userName}
    </Text>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: theme.ScreenDimensions.width - 30,
    // backgroundColor: theme.Colors.pink,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
  username: {
    fontSize: 22,
    textAlignVertical: 'top',
    alignSelf: 'baseline',
    // backgroundColor: theme.Colors.pink,
    width: theme.ScreenDimensions.width - 160,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: theme.Colors.grey,
    overflow: 'hidden',
  },
});
