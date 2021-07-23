import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatScreenMain = () => {
  return (
    <View>
      <Text style={styles.text}>ChatScreen</Text>
    </View>
  );
};

export default ChatScreenMain;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Nunito-SemiBoldItalic'
    }
});
