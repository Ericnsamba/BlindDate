import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {USER_INVITATION} from '../types';

export const UserInvitation = uid => {
  return async (dispatch, getState) => {
    try {
      const phoneNumber = auth().currentUser._user.phoneNumber;
      const userInvitation = await firestore()
        .collection('invites')
        .doc(phoneNumber)
        .get();
      //   console.log(
      //     'userInvitation.js ~~ USER_INVITATION =====> ',
      //     userInvitation,
      //   );
      dispatch({type: USER_INVITATION, payload: userInvitation});
    } catch (e) {
      // alert(e);
      console.log('🚀 ~~~ USER_INVITATION ~ alert');
    }
  };
};
