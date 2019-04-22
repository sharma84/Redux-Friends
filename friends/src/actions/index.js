import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const handleLogin = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axios.post("http://localhost:5000/api/login", creds).then((res) => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};
