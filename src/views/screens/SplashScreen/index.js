import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
// import InitStartup from '@/store/reducers/Startup/Init';
import {Text, View} from 'react-native';
// import LottieView from 'lottie-react-native'

const IndexStartupContainer = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(InitStartup.action());
  // }, [dispatch]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
    // <LottieView
    //   source={require('./animation')}
    //   autoPlay
    //   loop
    //   style={{ backgroundColor: '#4187ff' }}
    // />
  );
};

export default IndexStartupContainer;
