import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  token: "",
  isLoggedIn: false,
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: [...state.users, payload],
      };
    case types.ADD_USER_FAILURE:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        users: [...state.users],
      };
    default:
      return state;
  }
};
