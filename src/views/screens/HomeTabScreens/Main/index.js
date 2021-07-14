import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';

// import {Logo} from '@/views/components';
// import {useTheme} from '../../../theme';

const Main = ({navigation, route}) => {
  const {userData, user, userInvitation} = useSelector(
    state => state.userReducer,
  );

  useEffect(() => {
    // console.log('🚀 ~ from redux state userInvitation ======>', userInvitation);
    console.log('🚀 ~ from redux state userInvitation ======>', auth().currentUser._user.phoneNumber);
    // console.log('🚀 ~ from redux state user ======>', user);
    // console.log('🚀 ~ authUserData:', authUserData);
  }, []);

  const handlerLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{}}>
        <Text style={{}}>Main screen</Text>
      </View>
      <View />

      <Button
        onPress={() => {
          handlerLogout();
        }}
        title={'Logout'}
      />

      <Button
        onPress={() => {
          navigation.navigate('First');
        }}
        title={'first'}
      />
    </View>
  );
};

export default Main;
