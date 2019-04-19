import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

export const login = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds)
    .then((res) => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_RESOLVED, payload: res.data.payload });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_RESOLVED, payload: error });
    });
};

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const getFriends = () => (dispatch) => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then((response) =>
      dispatch({
        type: FETCH_FRIENDS_SUCCESS,
        payload: response.data
      })
    )
    .catch((error) => {
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error });
    });
};
