/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Layout from '../../theme/Layout';
import * as fonts from '../../theme/Fonts';
import * as theme from '../../theme/Variables';
import {ImageBackground} from 'react-native';

interface MatchedUserProfileTypes {
  matchedUserImage: string;
  matchedUserBio: string;
  matchedUserAge: string;
  matchedUserName: string;
  matchedUserOccupation: string;
  matchedUser: string;
}

const MatchedUserProfile: FC<MatchedUserProfileTypes> = ({
  matchedUserImage,
  matchedUserBio,
  matchedUserAge,
  matchedUserName,
  matchedUserOccupation,
  matchedUser,
}) => {
  const [activeTab, setActiveTab] = useState('matchedUserBoiTab');

  useEffect(() => {
    setActiveTab('matchedUserDetailsTab');
  }, []);

  return (
    <ImageBackground source={{uri: matchedUserImage}} style={styles.container}>
      {/* <Image source={{uri: matchedUserImage}} style={styles.matchedUserImage} /> */}
      <View style={styles.detailContainer}>
        {activeTab === 'matchedUserDetailsTab' && (
          <View style={{marginBottom: 20}}>
            <Text style={[fonts.textMedium, styles.matchedUserName]}>
              {matchedUserName}, {matchedUserAge}
            </Text>
            <Text style={[fonts.textExtraBold, styles.matchedUserOccupation]}>
              {matchedUserOccupation}
            </Text>
          </View>
        )}

        {activeTab === 'matchedUserBoiTab' && (
          <View style={styles.matchedUserBio}>
            <Text style={[fonts.textRegular, styles.matchedUserBioText]}>
              {matchedUserBio}
            </Text>
          </View>
        )}

        {activeTab === 'startChat' && (
          <View style={{marginBottom: 20}}>
            <Text style={[fonts.textMedium, styles.matchedUserName]}>
              {'startChat'}
            </Text>
          </View>
        )}

        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => setActiveTab('matchedUserDetailsTab')}>
            <Icon
              name={'person'}
              size={26}
              style={[
                activeTab === 'matchedUserDetailsTab'
                  ? styles.ActiveTab
                  : styles.icons,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('matchedUserBoiTab')}>
            <Icon
              name={'alert-circle'}
              size={26}
              style={[
                activeTab === 'matchedUserBoiTab'
                  ? styles.ActiveTab
                  : styles.icons,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('startChat')}>
            <Icon
              name={'chatbox'}
              size={26}
              style={[
                activeTab === 'startChat' ? styles.ActiveTab : styles.icons,
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MatchedUserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.greyLight,
    margin: 32,
    height: 380,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 15,
    justifyContent: 'flex-end',
  },
  matchedUserImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  iconRow: {
    paddingTop: 10,
    borderTopColor: theme.Colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
  },
  ActiveTab: {
    color: theme.Colors.lightBlue,
  },
  icons: {
    color: theme.Colors.white,
  },
  detailContainer: {
    // position: 'relative',
    // top: '70%',
    // backgroundColor: theme.Colors.pink,
    // alignItems: 'flex-end',
    // height: '100%',
    flexDirection: 'column',
  },
  matchedUserName: {
    fontSize: 24,
    color: theme.Colors.white,
  },
  matchedUserOccupation: {
    fontSize: 12,
    color: theme.Colors.white,
    textTransform: 'uppercase',
  },
  matchedUserBio: {
    backgroundColor: theme.Colors.greyLight,
    padding: 12,
    borderRadius: 15,
    marginBottom: 16,
    minHeight: 100,
  },
  matchedUserBioText: {
    fontSize: 16,
    color: theme.Colors.black,
  },
});
