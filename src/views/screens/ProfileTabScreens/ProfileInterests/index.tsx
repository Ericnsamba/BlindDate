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

  const addedItem = () => {
    console.log('==================== addedItem');
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
        items={interestData}
        uniqueKey="name"
        onSelectedItemsChange={onSelectedItemsChange}
        selectText="Pick Interests"
        searchInputPlaceholderText="Search Interests..."
        onChangeInput={text => console.log('text=====>', text)}
        tagRemoveIconColor={theme.Colors.blue}
        tagBorderColor={theme.Colors.blue}
        tagTextColor={theme.Colors.blue}
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        hideSubmitButton={true}
        hideDropdown={true}
        removeSelected={true}
        hideTags={false}
        selectedItems={userInterests}
        styleMainWrapper={styles.styleMainWrapper}
        styleSelectorContainer={styles.styleSelectorContainer}
        styleTextDropdown={styles.styleTextDropdown}
        searchInputStyle={styles.searchInputStyle}
        styleTextTag={styles.styleTextTag}
        onAddItem={addedItem}
      />

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
  styleMainWrapper: {
    // backgroundColor: 'pink',
    // color: theme.Colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  styleSelectorContainer: {
    // backgroundColor: 'red',
    // color: 'red',
  },
  styleTextDropdown: {
    //   color: 'red',
    //   backgroundColor: 'red',
  },
  styleTextTag: {
    color: theme.Colors.blue,
    // backgroundColor: 'red',
  },
  searchInputStyle: {
    color: 'blue',
    // backgroundColor: theme.Colors.primary,
    paddingVertical: 15,
    fontSize: 16,
  },
});
