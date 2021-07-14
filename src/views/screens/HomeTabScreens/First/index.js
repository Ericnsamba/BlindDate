import React from 'react';
import {Text, View, Button} from 'react-native';
// import useTranslation from '@/hooks/useTranslation.effect';
// import useMount from '@/hooks/useMount.effect';

const First = ({navigation}) => {
  // const {__} = useTranslation();
  // useMount(() => {
  //   navigation.setOptions({title: __('first')});
  // });
  return (
    <View>
      <Text>{'first'}</Text>
      <Button
        title={'second'}
        onPress={() => {
          navigation.navigate('Second');
        }}
      />
    </View>
  );
};

export default First;
