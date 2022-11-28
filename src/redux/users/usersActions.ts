import axios from "axios";

enum ACTIONS {
  FETCH_USERS_DATA_REQUESTS = "fetch_users_data_requests",
  FETCH_USERS_DATA_SUCCESS = "fetch_users_data_success",
  FETCH_USERS_DATA_FAILURE = "fetch_users_data_failure",
  FETCH_CLEAR_DATA = "fetch_clear_data",
}

export type dataState = {
  type: ACTIONS;
  payload?: any;
};

const fetchDataRequest = (): dataState => {
  return {
    type: ACTIONS.FETCH_USERS_DATA_REQUESTS,
  };
};

const fetchDataSuccess = (users: object[]): dataState => {
  return {
    type: ACTIONS.FETCH_USERS_DATA_SUCCESS,
    payload: users,
  };
};

const fetchDataFailure = (errorMessage: string): dataState => {
  return {
    type: ACTIONS.FETCH_USERS_DATA_FAILURE,
    payload: errorMessage,
  };
};

const fetchClearData = () => {
  return {
    type: ACTIONS.FETCH_CLEAR_DATA,
  };
};

const fethDataUsers = (textUser: string): any => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `${process.env.REACT_APP_GITHUB_BASE_URL}/search/users?q=${textUser}`
      )
      .then((response) => {
        const users: object[] = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export { fetchClearData, fethDataUsers, ACTIONS };
