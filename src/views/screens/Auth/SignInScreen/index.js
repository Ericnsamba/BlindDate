/**
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  // StatusBar,
  Text,
  StyleSheet,
  Button,
  View,
  PixelRatio,
  Switch,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
  DARK_THEME,
} from 'react-native-country-picker-modal';
import * as RNLocalize from 'react-native-localize';

import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  setUserData,
  setPhoneNumber,
} from '../../../../redux/actions/user/setUser';
import {setFetchUserData} from '../../../../redux/actions/user/loadUser';
import {PrimaryButton} from '../../../components/Buttons/Primary';
// import {ButtonWithIcon} from '../../../components/Buttons/ButtonWithIcon';

const SignInScreen = ({navigation}) => {
  // redux
  const dispatch = useDispatch();
  const {name, userData, phoneNumber} = useSelector(state => state.userReducer);

  // Declarations
  const [confirm, setConfirm] = useState(0);
  const [code, setCode] = useState(0);
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState(null);
  const [callingCode, setCallingCode] = useState();
  // const [number, setNumber] = useState(phoneNumber);

  useEffect(() => {
    if (country === null) {
    }
  }, []);

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(
      '+' + callingCode + phoneNumber,
    );
    setConfirm(confirmation);
    setFetchUserData({name: 'phone', phone: 'iPhone'});
    //+27610575617
  }
  console.log(
    '🚀 ~ file: index.js ~ line 62 ~ signInWithPhoneNumber ~ phoneNumber',
    phoneNumber,
  );

  async function confirmCode() {
    try {
      await confirm.confirm(code).then((user: {}) => {
        const userID = auth().currentUser.uid;
        const authUserData = auth().currentUser._user;
        const number = auth().currentUser._user.phoneNumber;

        const db = firestore();
        const docRef = db.collection('users').doc(userID);
        const subscriber = docRef.onSnapshot(documentSnapshot => {
          if (documentSnapshot.exists) {
            const userData = documentSnapshot.data();
            console.log('🚀 ~ documentSnapshot.exists');
            // dispatch(setUserData(userData));
            firestore()
              .collection('users')
              .doc(userID)
              .update({
                phoneNumber: number,
                userID,
                number,
                // username: setName,
              })
              .then(() => {
                dispatch(setUserData(authUserData));
                console.log('User added!');
                navigation.navigate('SetUserNameScreen');
              });
          } else if (!documentSnapshot.exists) {
            const userData = documentSnapshot.data();
            const number = auth().currentUser._user.phoneNumber;
            // console.log('🚀 ~ documentSnapshot.exists');
            firestore()
              .collection('users')
              .doc(userID)
              .add({
                phoneNumber: number,
                userID,
                number,
                // username: setName,
              })
              .then(() => {
                dispatch(setUserData(authUserData));
                console.log('User added!');
                navigation.navigate('SetUserNameScreen');
              });
          } else {
            console.log('No such document! ---> line 28 ---> watchUserData');
          }
        });
      });
    } catch (error) {
      console.log('Invalid code.', error.message);
    }
  }

  const onSelect = country => {
    console.log({country});
    setCountryCode(country.cca2);
    setCountry(country);
    setCallingCode(country.callingCode);
  };

  if (!confirm) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 30, marginBottom: 30, fontWeight: 'bold'}}>
            Welcome
          </Text>
          <View style={{}}>
            <View style={styles.inputContainer}>
              <View>
                <CountryPicker
                  containerButtonStyle={styles.containerButtonStyle}
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
                  theme={DARK_THEME}
                  onSelect={onSelect}
                />
              </View>

              <TextInput
                defaultValue={phoneNumber}
                onChangeText={value => dispatch(setPhoneNumber(value))}
                placeholder="Phone Number"
                keyboardType="numeric"
                style={styles.textInput}
              />
            </View>

            <View>
              <PrimaryButton
                title="Login Button"
                onPress={signInWithPhoneNumber}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        defaultValue={code}
        onChangeText={text => setCode(text)}
        placeholder="confirm code"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#B6B6B6',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  containerButtonStyle: {
    // height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 18,
    fontWeight: '400',
    // backgroundColor: '#eae9e9',
  },
  LoginButton: {
    fontWeight: '700',
    backgroundColor: '#feedba',
    width: 100,
    height: 50,
  },
});

export default SignInScreen;
