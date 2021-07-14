import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../../../components/Buttons/Primary';

const SplashScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
