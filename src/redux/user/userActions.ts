import axios from "axios";
import { useNavigate } from "react-router-dom";

enum ACTIONS {
  FETCH_USER_DATA_REQUEST = "fetch-user_data-request",
  FETCH_USER_DATA_SUCCESS = "fetch-user_data-success",
  FETCH_USER_DATA_FAILURE = "fetch-user_data-failure",
}

export type User = {
  type: ACTIONS;
  payload?: object | string;
};

const fetchDataRequest = (): User => {
  return {
    type: ACTIONS.FETCH_USER_DATA_REQUEST,
  };
};

const fetchDataSuccess = (user: object): User => {
  return {
    type: ACTIONS.FETCH_USER_DATA_SUCCESS,
    payload: user,
  };
};

const fetchDataFailure = (errorMSG: string): User => {
  return {
    type: ACTIONS.FETCH_USER_DATA_SUCCESS,
    payload: errorMSG,
  };
};

const fetchDataUser = (userLogin: string | undefined): any => {
 
  return (dispach: any) => {
    dispach(fetchDataRequest());
    axios
      .get(`${process.env.REACT_APP_GITHUB_BASE_URL}/users/${userLogin}`)
      .then((response) => {
        const user: object = response.data;
        dispach(fetchDataSuccess(user));
      })
      .catch((error) => {
        dispach(fetchDataFailure(error.message));
      });
  };
};

export { ACTIONS, fetchDataUser };
