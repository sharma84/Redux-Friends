import {
    // LOGIN_START,
    // LOGIN_RESOLVED,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from "./actions/actions.js";

const initialState = {
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    fetching: false,
    error: null
  }

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        friend: action.payload
      };

    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
};
