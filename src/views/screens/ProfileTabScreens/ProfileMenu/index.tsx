import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import MenuButton from '../../../components/Profile/MenuButton';
import MenuItem from '../../../components/Profile/MenuItem';
import UserDetailsHeader from '../../../components/Profile/UserDetailsHeader';
import * as theme from '../../../theme/Variables';
import * as fonts from '../../../theme/Fonts';
import * as layout from '../../../theme/Layout';

// const ProfileMenu: React.ComponentType<any> ({ navigation }) {
const ProfileMenu = ({navigation}) => {
  const {userData, authUserData} = useSelector(state => state.userReducer);
  return (
    <SafeAreaView style={[layout.fill, styles.container]}>
      <View />
      <View style={styles.UserDetailsHeader}>
        <MenuButton
          alignSelf="flex-end"
          iconName="close"
          iconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <UserDetailsHeader
          username={authUserData.firstName + ' ' + authUserData.lastName}
          phoneNumber={authUserData.phoneNumber}
          ocupation={authUserData.ocupation}
          imageUrl={authUserData.profilePicture}
        />
      </View>
      <View style={styles.MenuItemContainer}>
        <MenuItem
          title="Interests"
          iconName="checkmark-circle-outline"
          iconSize={24}
          onPress={() => {
            navigation.navigate('ProfileInterests');
          }}
        />
        <MenuItem
          title="Invites"
          iconName="mail-outline"
          iconSize={24}
          onPress={() => {
            navigation.navigate('Invites');
          }}
        />
        <MenuItem
          title="Privacy"
          iconName="shield-outline"
          iconSize={24}
          onPress={() => {
            navigation.navigate('ProfileInterests');
          }}
        />
        <MenuItem
          title="Help"
          iconName="help-circle-outline"
          iconSize={26}
          onPress={() => {
            navigation.navigate('ProfileInterests');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.white,
    padding: 15,
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
  UserDetailsHeader: {
    padding: 15,
    // backgroundColor: theme.Colors.greyLight
  },
  MenuItemContainer: {
    padding: 15,
    backgroundColor: theme.Colors.greyLight,
    margin: 20,
    borderRadius: 10,
  },
});
