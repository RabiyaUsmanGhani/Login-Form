import axios from "axios";

export const LoginActionTypes = {
  USER_DATA: "User-data",
};

export const SetUserData = (payload) => {
  return {
    type: LoginActionTypes.USER_DATA,
    payload,
  };
};

export const User = (body) => (dispatch, getState) => {
  return axios
    .post("http://restapi.adequateshop.com/api/authaccount/login", body)
    .then((res) => {
      console.log("res", res);

      dispatch(SetUserData(res.data));
    })
    .catch((err) => {
      console.log("error", err);
    });
};
