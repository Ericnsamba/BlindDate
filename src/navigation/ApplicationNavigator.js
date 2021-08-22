import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LoginStackNavigator from './LoginStackNavigator';
import {TabNavigator} from './Tab';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import {loadUser} from '../redux/actions/user/loadUser';
import {UserInvitation} from '../redux/actions/user/userInvitation';
import {SetUserNameScreen} from '../views/screens';
import {inviteList, setUserData} from '../redux/actions/user/setUser';

const ApplicationNavigator = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const userID = auth().currentUser?.uid;
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [userLocal, setUserLocal] = useState();
  const [firstName, setFirstName] = useState(false);
  const [invitation, setInvitation] = useState();
  const invitesCollection = firestore().collection('invites');
  const {userData, user, phoneNumber} = useSelector(state => state.userReducer);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    firestoreUserData();
    invitsData();
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUserLocal(user);
    // dispatch(setUserData(user));
    if (initializing) {
      setInitializing(false);
    }
  }

  const firestoreUserData = () => {
    const userID = auth().currentUser?.uid;
    const userInvitation = firestore()
      .collection('users')
      .doc(userID)
      .get()
      .then(data => {
        // setUserLocal(data);
        if (data._exists) {
          dispatch(setUserData(data._data));
          setFirstName(data._exists);
          // console.log('line 48 ------>', data);
        }
      });
  };

  const invitsData = () => {
    if (userLocal) {
      const number = auth().currentUser._user.phoneNumber;
      const userInvitation = invitesCollection
        .doc(number)
        .get()
        .then(inviteList => {
          if (inviteList.exists) {
            setInvitation(inviteList.exists);
            dispatch(UserInvitation(inviteList));
            // console.log('userInvitation ------>', inviteList);
          }
        })
        .then(
          invitesCollection
            .where('uid', '==', userID)
            .get()
            .then(invites => {
              /* ... */
              // setInvitionData(querySnapshot);
              dispatch(inviteList(invites));
              // console.log('invitesCollectionData inviteList', inviteList._docs.lengthF);
            }),
        );
    }
  };

  if (initializing) {
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>initializing</Text>
      </View>
    );
  } else if (!userLocal) {
    return <LoginStackNavigator />;
  } else if (userLocal && firstName && !invitation) {
    invitsData();
    console.log('here we return WaitingRoom ');
    // if user do not have an invite
    // return WaitingRoom
    // console.log(' you do not have an invite');
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>you do not have an invite</Text>
      </View>
    );
  } else if (userLocal && !firstName) {
    // console.log('line 96 ~ ApplicationNavigator ~ firstName', firstName);
    return <SetUserNameScreen />;
  } else if (userLocal && firstName && invitation) {
    // console.log('line 94 ~ ApplicationNavigator ~ firstName', firstName);
    return <TabNavigator />;
  }

  return (
    <>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>initializing ⚠️</Text>
      </View>
    </>
  );
};

export default ApplicationNavigator;
