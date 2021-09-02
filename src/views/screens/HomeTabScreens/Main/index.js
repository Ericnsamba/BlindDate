import React, {useEffect, useState} from 'react';
import {
  Images,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// components
import {Header} from '../../../components/Home/Header';

//styles
import * as layout from '../../../theme/Layout';
import Gutters from '../../../theme/Gutters';
import * as fonts from '../../../theme/Fonts';
import * as theme from '../../../theme/Variables';

const Main = ({navigation, route}) => {
  const [currentUserInterests, setCurrentUserInterests] = useState();
  const [matchedUser, setMatchedUser] = useState();
  const {userData, user, userInvitation, authUserData} = useSelector(
    state => state.userReducer,
  );

  useEffect(() => {
    // getUserInterests();
    // console.log({userInvitation, user, userData});
  }, []);

  const compareUsersFunction = querySnapshot => {
    //
    let compareUsers = (currentUser, user2) => {
      let score = 0;
      user2.interests.map(interest => {
        if (currentUser._data.interests.includes(interest)) {
          score++;
        }
      });
      return score;
    };

    const documents = querySnapshot._docs;
    const newDocs = documents.map(data => {
      const currentUserID = currentUserInterests._data.userID;
      return {
        ...data._data,
        matchedScore: compareUsers(currentUserInterests, data._data),
      };
    });

    // remove currentUser from the list of usersInterests
    var matchedUsers = [];
    for (var i = 0; i < newDocs.length; i++) {
      if (newDocs[i].userID !== auth().currentUser.uid) {
        matchedUsers.push(newDocs[i]);
      }
    }

    // find the highest score and assign it to maxMatchedScore
    const maxMatchedScore = Math.max(
      ...matchedUsers.map(e => e.matchedScore),
      0,
    );

    //find the highest score user based onn maxMatchedScore
    handleMatch(maxMatchedScore, matchedUsers);

    return newDocs;
  };

  const handleMatch = (maxMatchedScore, users) => {
    // return user's aobject with highest score based on maxMatchedScore
    if (users.length > 0) {
      const match = users.find(obj => {
        return obj.matchedScore === maxMatchedScore;
      });
      // console.log('=======> match', match);
    }
  };

  //
  const getUserInterests = () => {
    const userID = auth().currentUser?.uid;
    const userInterests = firestore()
      .collection('interests')
      .doc(userID)
      .get()
      .then(interests => {
        setCurrentUserInterests(interests);
      })
      .then(otherUserInterests => {
        firestore()
          .collection('interests')
          // Filter results
          .orderBy('age')
          .startAt(20) // user age
          .endAt(30) // user age + 10
          .get()
          .then(querySnapshot => {
            compareUsersFunction(querySnapshot);
          });
      });
  };

  const handlerLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={[layout.fill, styles.container]}>
      <View style={[styles.headerContainer]}>
        <Header
          userName={authUserData.firstName}
          image={authUserData.profilePicture}
        />
      </View>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.white,
    paddingHorizontal: 210,
    flex: 1,
  },
  headerContainer: {
    margin: 20,
  },
});

export default Main;
