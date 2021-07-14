// export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_USER_DATA = 'SET_USER_DATA';

// export const setName =
//   (name: string) =>
//   (dispatch: (arg0: {type: string; payload: any}) => void) => {
//     dispatch({
//       type: SET_USER_NAME,
//       payload: name,
//     });
//   };

export const setPhoneNumber =
  (phoneNumber: any) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_PHONE_NUMBER,
      payload: phoneNumber,
    });
  };

export const setUserData =
  (authUserData: any) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_USER_DATA,
      payload: authUserData,
    });
  };
