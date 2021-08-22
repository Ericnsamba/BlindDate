import React, {FC, useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import UserDetailsHeader from '../../../components/Profile/UserDetailsHeader';

//styles
import * as layout from '../../../theme/Layout';
import * as fonts from '../../../theme/Fonts';
import * as theme from '../../../theme/Variables';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuButton from '../../../components/Profile/MenuButton';
import {PrimaryButton} from '../../../components/Buttons/Primary';
import {handlers} from 'react-native-localize/dist/typescript/module';

interface ProfileScreenTypeDeclaration {
  navigation: any;
  route: any;
  userReducer: any;
  bioText: any;
  userID: string;
}

let updateBio = (
  data: Partial<{[x: string]: any}>,
  userID: string | undefined,
) => {
  const dbRef = firestore().doc(`users/${userID}`);
  if (dbRef) {
    dbRef.update(data);
  } else {
    dbRef.set(data);
  }
};

const ProfileScreen: FC<ProfileScreenTypeDeclaration> = ({navigation}) => {
  const {userData, authUserData} = useSelector(state => state.userReducer);
  const [isEditing, setIsEditing] = useState(false);

  const [bioText, setBioText] = useState(authUserData.bio);

  const handleBioText = () => {
    const userID = auth().currentUser?.uid;
    const data = {
      timeStamp: new Date(),
      bio: bioText,
    };

    updateBio(data, userID);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <MenuButton
        alignSelf="flex-end"
        iconName="menu-outline"
        iconSize={38}
        onPress={() => {
          navigation.navigate('ProfileMenu');
        }}
      />
      <UserDetailsHeader
        username={authUserData.firstName + ' ' + authUserData.lastName}
        phoneNumber={authUserData.phoneNumber}
        ocupation={authUserData.ocupation}
        imageUrl={authUserData.profilePicture}
      />

      {/* bioSection */}
      <View style={[styles.bioSection]}>
        {isEditing ? (
          <TextInput
            value={bioText}
            onChangeText={value => setBioText(value)}
            autoFocus
            onBlur={() => setIsEditing(false)}
            style={(fonts.textRegular, [styles.textInput])}
            multiline={true}
            blurOnSubmit
          />
        ) : (
          <Text
            style={[fonts.textLeft, fonts.textRegular, styles.bioText]}
            onPress={() => setIsEditing(true)}>
            {bioText ? bioText : 'Tap to edit or Add bio'}
          </Text>
        )}
        {/* <View style={styles.editBioBox}>
          <TouchableOpacity onPress={() => {}} style={styles.editBioButton}>
            <Text
              style={[fonts.textLeft, fonts.textMedium, styles.editBioText]}>
              Edit
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Photos */}
      <View style={styles.photoSectionContainer}>
        <View style={styles.photoContainer} />
        <View style={styles.photoContainer} />
        <View style={styles.photoContainer} />
      </View>

      {/* Save or update button */}
      <View style={styles.SaveButton}>
        <PrimaryButton onPress={() => handleBioText()} title="Save" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: theme.Colors.white,
  },
  bioSection: {
    backgroundColor: theme.Colors.greyLight,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    minHeight: 100,
  },
  bioText: {
    // fontSize: 16,
  },
  editBioBox: {
    width: '100%',
    flex: 0,
    alignSelf: 'flex-end',
  },
  editBioButton: {
    color: theme.Colors.primary,
  },
  editBioText: {
    color: theme.Colors.primary,
    fontSize: 16,
    width: '100%',
    backgroundColor: theme.Colors.pink,
  },
  textInput: {
    color: theme.Colors.primary,
    fontSize: 16,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  //photo section styles
  photoSectionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  photoContainer: {
    width: 115,
    height: 140,
    borderRadius: 10,
    backgroundColor: theme.Colors.grey,
  },

  //save button styles
  SaveButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
