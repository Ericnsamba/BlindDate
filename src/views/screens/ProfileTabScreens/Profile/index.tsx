import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import UserDetailsHeader from '../../../components/Profile/UserDetailsHeader';
// import useTranslation from '@/hooks/useTranslation.effect';
// import useMount from '@/hooks/useMount.effect';

//styles
import * as layout from '../../../theme/Layout';
// import Gutters from '../../../theme/Gutters';
import * as fonts from '../../../theme/Fonts';
import * as theme from '../../../theme/Variables';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuButton from '../../../components/Profile/MenuButton';
import {PrimaryButton} from '../../../components/Buttons/Primary';

const ProfileScreen = ({navigation, route}) => (
  <SafeAreaView style={[styles.container]}>
    <MenuButton iconName="menu-outline" iconSize={38} onPress={() => {}} />
    <UserDetailsHeader
      username="Oliver Name"
      phoneNumber="+27610575617"
      ocupation="Designer"
    />

    {/* bioSection */}
    <View style={[styles.bioSection]}>
      <Text style={[fonts.textLeft, fonts.textRegular, styles.bioText]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio.
      </Text>
      <View style={styles.editBioBox}>
        <TouchableOpacity onPress={() => {}} style={styles.editBioButton}>
          <Text style={[fonts.textLeft, fonts.textMedium, styles.editBioText]}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* Photos */}
    <View style={styles.photoSectionContainer}>
      <View style={styles.photoContainer} />
      <View style={styles.photoContainer} />
      <View style={styles.photoContainer} />
    </View>

    {/* Save or update button */}
    <View style={styles.SaveButton}>
      <PrimaryButton onPress={() => {}} title="Save" />
    </View>
  </SafeAreaView>
);

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
  },
  //photo section styles
  photoSectionContainer: {
    width: '100%',
    // backgroundColor: theme.Colors.pink,
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
