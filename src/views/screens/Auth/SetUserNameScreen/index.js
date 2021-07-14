import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const SetUserNameScreen = ({navigation}) => {
  // redux
  const dispatch = useDispatch();
  const {name, userInvitation, phoneNumber} = useSelector(
    state => state.userReducer,
  );
  //
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  useEffect(() => {
    console.log(
      '🚀 ~ file: index.js ~ line 24 ~ SetUserNameScreen ~ userInvitation',
      userInvitation,
    );
    // console.log("=============> userData", userData)
    // import
  }, []);

  const setUserName = () => {
    const userID = auth().currentUser.uid;
    const docRef = firestore().collection('users').doc(userID);
    const subscriber = docRef.onSnapshot(documentSnapshot => {
      if (documentSnapshot.exists) {
        firestore()
          .collection('users')
          .doc(userID)
          .update({
            firstName: firstName,
            lastName: lastName,
          })
          .then(() => {
            navigation.navigate('ApplicationNavigator');
            console.log('User update!');
          });
      } else if (!documentSnapshot.exists) {
        console.log('🚀 ~ documentSnapshot.exists');
        firestore()
          .collection('users')
          .doc(userID)
          .set({
            userID,
            firstName: firstName,
            lastName: lastName,
          })
          .then(() => {
            //
            // run a function to check if user exist in the inviteList
            //

            navigation.navigate('ApplicationNavigator');
            console.log('User added!');
          });
      } else {
        console.log('No such document! ---> line 28 ---> watchUserData');
      }
    });
  };

  const handlerLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Welcome</Text>
        <View style={{}}>
          <TextInput
            defaultValue={firstName}
            onChangeText={value => setFirstName(value)}
            placeholder="First name"
            style={styles.textInput}
          />
          <TextInput
            defaultValue={lastName}
            onChangeText={value => setLastName(value)}
            placeholder="Last name"
            style={styles.textInput}
          />
          <View>
            <Button title="setUserName" onPress={() => setUserName()} />
          </View>
          <Button
            onPress={() => {
              handlerLogout();
            }}
            title={'Logout'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: '#eae9e9',
    height: 40,
    paddingHorizontal: 20,
  },
  LoginButton: {
    fontWeight: '700',
    backgroundColor: '#feedba',
  },
});

export default SetUserNameScreen;
