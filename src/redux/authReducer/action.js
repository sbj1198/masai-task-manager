import * as types from "./actionTypes";
import axios from "axios";

export const registerUser = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USER_REQUEST });
  return axios
    .post("https://energetic-lime-poncho.cyclic.app/users", payload)
    .then((res) => {
      dispatch({
        type: types.ADD_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_USER_FAILURE,
        payload: err,
      });
    });
};
