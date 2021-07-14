import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  setName,
  setPhoneNumber,
  increaseAge,
} from '../redux/actions/user';

export default function Home({navigation, route}) {
  const dispatch = useDispatch();
  const {name, phoneNumber} = useSelector(state => state.userReducer);

  console.log(' auth() =====> ', auth());
  console.log(' auth() =====> ');

  //   const [name, setName] = useState('');
  //   const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.body}>
      <Text style={[styles.text]}>Welcome {name} !</Text>
      <Text style={[styles.text]}>Your age is {phoneNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={value => dispatch(setName(value))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
