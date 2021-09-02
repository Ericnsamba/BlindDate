/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Contacts from 'react-native-contacts';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
  DARK_THEME,
} from 'react-native-country-picker-modal';

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

//components
import MenuButton from '../../../components/Profile/MenuButton';
import {PrimaryButton} from '../../../components/Buttons/Primary';

//styles
import * as layout from '../../../theme/Layout';
import * as fonts from '../../../theme/Fonts';
import * as theme from '../../../theme/Variables';
import SearchBar from '../../../components/SearchBar';
import Avatar from '../../../components/Avatar';
import {number} from 'prop-types';
import {ContactList} from '../../../components/ContactList';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

interface InvitesTypes {
  phoneNumbers: number | [];
  givenName: string;
  familyName: string;
  navigation: any;
  route: any;
  textString: any;
  country: any;
}

const Invites: FC<InvitesTypes> = ({navigation, route}) => {
  const {authUserData, inviteListData} = useSelector(
    state => state.userReducer,
  );
  const userID = auth().currentUser?.uid;
  const [invitionData, setInvitionData] = useState();
  const invitesCollection = firestore().collection('invites');
  const [phoneNumber, setPhoneNumber] = useState();
  const [countryCode, setCountryCode] = useState('');
  const [callingCode, setCallingCode] = useState();

  useEffect(() => {
    // loadContacts();
    // renderContactsList();

    // console.log(
    //   '=======> Object.entries',

    //   // Object.entries(inviteListData._docs),
    // );
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        return setAllContacts(contacts);
        // this.setState({contacts, loading: false});
        // console.log('Contacts.getAll ~ contacts', contacts);
      })
      .catch(e => {
        // this.setState({loading: false});
        console.log('error', e);
      });

    Contacts.getCount().then(count => {
      // console.log('count', count);
      // this.setState({searchPlaceholder: `Search ${count} contacts`});
    });

    Contacts.checkPermission();
  };

  const onSelect = country => {
    console.log({country});
    setCountryCode(country.cca2);
    // setCountry(country);
    setCallingCode(country.callingCode);
  };

  const inviteContact = () => {
    // authUserData.userID
    if (phoneNumber && phoneNumber.length > 5) {
      const number = '+' + callingCode + phoneNumber;
      console.log('This is a valid phone number', number);
      //   invitesCollection
      //     .doc(phoneNumber)
      //     .set({
      //       invitedBy: authUserData.firstName + ' ' + authUserData.lastName,
      //       timeStamp: new Date(),
      //       invitedUserNumber: number,
      //       invitedByID: authUserData.userID,
      //       uid: userID,
      //     })
      //     .then(() => {
      //       console.log('User added!');
      //     });
    } else {
      console.log('Make sure you enter a valid phone number');
    }
  };

  const renderContacts = () => {
    const data = inviteListData._docs;
    // console.log('=======>', data.length);
    const contacts = data.map((invite, index) => {
      return (
        <ContactList
          name={'invited'}
          number={invite._data.invitedUserNumber}
          uniqueKey={index}
        />
      );
      // return <ContactList name={invite.name} number={invite.number}/>;
    });
    return contacts;
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
      <View style={styles.headerTextView}>
        <Text
          style={[
            fonts.titleRegular,
            {
              marginBottom: 30,
              lineHeight: 48,
              textTransform: 'capitalize',
              textAlign: 'center',
            },
          ]}>
          Add a friend who needs a date
        </Text>
      </View>
      <View style={{}}>
        <View style={{}}>
          <View style={styles.inputContainer}>
            <View style={styles.CountryPicker}>
              <CountryPicker
                containerButtonStyle={[
                  fonts.textRegular,
                  styles.containerButtonStyle,
                ]}
                countryCode={countryCode}
                visible={false}
                withFlag={true}
                withCloseButton={true}
                withAlphaFilter={true}
                withCallingCode={true}
                withEmoji={true}
                withCallingCodeButton={true}
                withFilter={true}
                withModal={true}
                // theme={DARK_THEME}
                onSelect={onSelect}
              />
            </View>

            <TextInput
              defaultValue={phoneNumber}
              onChangeText={value => setPhoneNumber(value)}
              placeholder="Phone Number"
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>

          <View>
            <PrimaryButton
              title="Invite Contact"
              onPress={() => inviteContact()}
            />
          </View>
        </View>
        <View style={{}}>
          <View style={styles.listHeader}>
            <Text style={[fonts.textMedium]}>People you have invited</Text>
            <View style={styles.TotalTexView}>
              <Text style={[fonts.textMedium, styles.TotalText]}>
                {inviteListData._docs.length}/6
              </Text>
            </View>
          </View>
          <View style={{}}>
            {inviteListData ? (
              <ScrollView style={[styles.contactScrollView]}>
                {renderContacts()}
              </ScrollView>
            ) : (
              <View>
                <Text>nothing</Text>
              </View>
            )}
            {/* <RenderContacts /> */}
          </View>
        </View>
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
  headerTextView: {
    width: theme.ScreenDimensions.width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  modalView: {
    width: 300,
    height: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: theme.Colors.greyLight,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: theme.ScreenDimensions.width - 60,
  },
  CountryPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 100,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '400',
    width: 180,
  },
  listHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  TotalTexView: {
    backgroundColor: theme.Colors.blue,
    color: theme.Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  TotalText: {
    color: theme.Colors.white,
  },
  contactScrollView: {
    paddingVertical: 10,
    width: '100%',
  },
});

export default Invites;
