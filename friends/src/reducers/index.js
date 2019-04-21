import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  error: "",
  fetchingFriends: false,
  token: localStorage.getItem("token") //
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
        //token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
