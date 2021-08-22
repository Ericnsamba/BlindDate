import {
  // SET_USER_NAME,
  SET_PHONE_NUMBER,
  SET_USER_DATA,
} from '../../actions/user/setUser';
import {
  USER_LOADED,
  USER_INVITATION,
  SET_INVITION_LIST,
} from '../../actions/types';

const initialState = {
  name: 'initialState Name',
  phoneNumber: '',
  authUserData: {},
  userInvitation: null,
  isAuthenticated: null,
  loading: true,
  user: null,
  uid: null,
};

function userReducer(state = initialState, action: {type: any; payload: any}) {
  const {type, payload} = action;

  switch (type) {
    case SET_PHONE_NUMBER:
      return {...state, phoneNumber: action.payload};
    case SET_USER_DATA:
      return {...state, authUserData: action.payload};
    case SET_INVITION_LIST:
      return {...state, inviteListData: action.payload};
    case USER_LOADED:
      return {
        ...state,
        uid: payload.uid,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case USER_INVITATION:
      return {
        ...state,
        uid: payload.uid,
        userInvitation: payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

export default userReducer;
