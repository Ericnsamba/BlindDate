import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {USER_LOADED} from '../types';
// interface UserInterface {
// }

export const loadUser = uid => {
  return async (dispatch, getState) => {
    try {
      const userID = auth().currentUser?.uid;
      const user = await firestore().collection('users').doc(userID).get();
      // console.log('🚀 ~ file: loadUser.ts ~ line 21 ~ return ~ user', user);
      dispatch({type: USER_LOADED, payload: user.data()});
    } catch (e) {
      // alert(e);
      console.log('🚀 ~ file: loadUser.ts ~ line 23 ~ error');
    }
  };
};
