/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import user from '../../../redux/reducers/user';

//styles
import * as layout from '../../../theme/Layout';
// import Gutters from '../../../theme/Gutters';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';

interface UserDetailsHeaderProps {
  navigation: any;
  route: any;
  ocupation: string;
  phoneNumber: string;
  image: string;
  username: string;
}

const UserDetailsHeader = ({
  navigation,
  route,
  ocupation,
  phoneNumber,
  image,
  username,
}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image src={image} />
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
    width: 80,
    height: 80,
    backgroundColor: theme.Colors.grey,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
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
});
