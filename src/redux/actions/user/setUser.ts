export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_USER_DATA = 'SET_USER_DATA';
import {SET_INVITION_LIST} from '../../actions/types';

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
export const inviteList =
  (inviteListData: any) =>
  (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_INVITION_LIST,
      payload: inviteListData,
    });
  };
