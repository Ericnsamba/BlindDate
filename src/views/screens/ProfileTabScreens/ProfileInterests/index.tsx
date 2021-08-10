import React, {FC, useState, useEffect} from 'react';

// firebase
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// import all the components we are going to use
import {FlatList, StyleSheet, Text, View} from 'react-native';
import * as layout from '../../../theme/Layout';
import * as fonts from '../../../theme/Fonts';
import * as theme from '../../../theme/Variables';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuButton from '../../../components/Profile/MenuButton';
import {PrimaryButton} from '../../../components/Buttons/Primary';

// import MultiSelect library
import MultiSelect from 'react-native-multiple-select';
import {interests} from '../../../../data/users';
import SelectedInterest from '../../../components/Profile/selectedInterest';

let addItem = (interests, uid) => {
  const adaNameRef = firestore().collection('interests').doc(`${uid}`);
  if (adaNameRef) {
    adaNameRef.update(interests);
  } else {
    adaNameRef.set(interests);
  }
};

const ProfileInterests: FC = ({navigation}) => {
  // const [selectedItems, setSelectedItems] = useState([]);
  const [interestData, setInterestData] = useState();
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    const userID = auth().currentUser?.uid;
    // console.log('User data: ', selectedItems);

    const subscriber = firestore()
      .collection('interests')
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        const UserInterestData = documentSnapshot._data;
        setUserInterests(UserInterestData.interests);
        // CurrentUserInterests(UserInterestData.interests);
      });

    const interestList = database()
      .ref('interests')
      .on('value', snapshot => {
        setInterestData(snapshot.val());
      });
  }, []);

  const onSelectedItemsChange = selectedItems => {
    setUserInterests(selectedItems);
    // console.log('text=====>', selectedItems);
  };

  const addSelectedInterests = () => {
    const userID = auth().currentUser?.uid;
    const interests = {interests: userInterests};
    addItem(interests, userID);
  };

  const RenderSelectedItems = () => {
    const selectedInterests = userInterests.map((interest, index) => {
      return (
        <View>
          <SelectedInterest text={interest} uniqueKey={index} />
        </View>
      );
    });
    return selectedInterests;
  };

  const CurrentUserInterests = userInterestsData => {
    // const data = Object.assign({}, userInterests.interests);

    setTimeout(() => {
      console.log('============>', userInterestsData);
      const existingInterests = userInterestsData.map((interest, index) => {
        return (
          <SelectedInterest text={interest ? interest : ''} uniqueKey={1} />
        );
      });
      return existingInterests;
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MenuButton
        iconName="chevron-back-outline"
        alignSelf="flex-start"
        iconSize={34}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={[styles.titleText]}>Update your interests</Text>

      <MultiSelect
        hideTags
        items={interestData}
        uniqueKey="name"
        onSelectedItemsChange={onSelectedItemsChange}
        // selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={text => console.log('text=====>', text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{color: '#CCC', padding: 15}}
        hideSubmitButton={true}
        selectedItems={userInterests}
        // submitButtonColor="#48d22b"
        // submitButtonText="Submit"
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <RenderSelectedItems />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {/* <CurrentUserInterests /> */}
      </View>

      {/* Save or update button */}
      <View style={styles.SaveButton}>
        {/* <Text>{selectedItems}</Text> */}
        <PrimaryButton onPress={addSelectedInterests} title="Update" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileInterests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  //save button styles
  SaveButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
});
