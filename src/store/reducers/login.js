import { LoginActionTypes } from "../actions/login";

const initialState = {
  userData: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LoginActionTypes.USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};
