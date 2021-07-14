import React from 'react';
import {Button, Text, View} from 'react-native';
// import {useTheme} from '@/views/theme';
// import useTranslation from '@/hooks/useTranslation.effect';
// import ChangeTheme from '@/store/reducers/Theme/ChangeTheme';
import {useDispatch} from 'react-redux';
// import {navigateAndSimpleReset} from '@/navigation/config/Root';
// import SignOut from '@/store/reducers/User/SignOut';
// import useMount from '@/hooks/useMount.effect';

const Main = ({navigation}) => {
  // const {Fonts} = useTheme();
  // const {__, setLanguage} = useTranslation();
  // const dispatch = useDispatch();

  // const changeTheme = ({theme, darkMode}) => {
  //   dispatch(ChangeTheme.action({theme, darkMode}));
  // };
  // useMount(() => {
  //   navigation.setOptions({title: __('Settings')});
  // });
  return (
    <View>
      <Text>{'dark_mode'} :</Text>
    </View>
  );
};

export default Main;
