import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
// import useTranslation from '@/hooks/useTranslation.effect';
// import useMount from '@/hooks/useMount.effect';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{'Profile'}</Text>
      <Button
        title={'second'}
        onPress={() => {
          navigation.navigate('Second');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileScreen;
