import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const setFetchUserData = (userData: void | object) => {
  return {
    type: 'fetchUserData',
    payload: userData,
  };
};

export const fetchUserData =
  () =>
  async (
    dispatch: (arg0: {
      type: string;
      payload: FirebaseFirestoreTypes.DocumentData | undefined;
    }) => void,
  ) => {
    const response = await function () {
      const db = firestore();
      if (auth().currentUser) {
        const userID = auth().currentUser?.uid;
        const docRef = db.collection('users').doc(userID);
        const subscriber = docRef.onSnapshot(documentSnapshot => {
          if (documentSnapshot.exists) {
            const userData = documentSnapshot.data();
            // dispatch(fetchUserData(userData));
            dispatch({type: FETCH_USER_DATA, payload: userData});
            console.log(
              '🚀 ~ file: fetchUserData.ts ~ line 29 ~ response ~ userData',
              userData,
            );
          } else {
            console.log('No such document! ---> line 45 ---> watchUserData');
          }
        });

        // Stop listening for updates when no longer required
        return () => subscriber();
      }
    };

    return response;
    // dispatch({type: ActionTypes.FETCH_USER_DATA, payload: response});
  };
