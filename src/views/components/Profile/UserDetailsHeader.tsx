/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useDispatch, useSelector} from 'react-redux';
import user from '../../../redux/reducers/user';

//styles
import * as layout from '../../../theme/Layout';
// import Gutters from '../../../theme/Gutters';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

interface UserDetailsHeaderProps {
  ocupation: string;
  phoneNumber: string;
  imageUrl: string;
  username: string;
}

const UserDetailsHeader: FC<UserDetailsHeaderProps> = ({
  ocupation,
  phoneNumber,
  imageUrl,
  username,
}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: imageUrl,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
      />
    </View>
    <View style={styles.detailContainer}>
      <Text style={[styles.title, fonts.textCenter, fonts.titleRegular]}>
        {username}
      </Text>
      <Text style={[styles.ocupation, fonts.textLeft]}>{ocupation}</Text>
      <Text style={[styles.phoneNumber, fonts.textLeft]}>{phoneNumber}</Text>
      {/* <Text style={[styles.phoneNumber, fonts.textLeft]}>+27610575617 </Text> */}
    </View>
  </View>
);

export default UserDetailsHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'pink',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: theme.Colors.grey,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    overflow: 'hidden',
  },
  detailContainer: {},
  title: {},
  ocupation: {
    color: theme.Colors.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  phoneNumber: {
    color: theme.Colors.grey,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
