import axios from "axios";

enum ACTIONS {
  FETCH_DATA_REQUESTS = "fetch_data_requests",
  FETCH_DATA_SUCCESS = "fetch_data_success",
  FETCH_DATA_FAILURE = "fetch_data_failure",
}

export type dataState = {
  type: ACTIONS;
  payload?: any
}

const fetchDataRequest = (): dataState => {
  return {
    type: ACTIONS.FETCH_DATA_REQUESTS,
  };
};

const fetchDataSuccess = (users: object[]): dataState => {
  return {
    type: ACTIONS.FETCH_DATA_SUCCESS,
    payload: users,
  };
};

const fetchDataFailure = (errorMessage: string): dataState => {
  return {
    type: ACTIONS.FETCH_DATA_FAILURE,
    payload: errorMessage,
  };
};

const fethDataUsers = (textUser: string): any => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());
    axios
      .get(`${process.env.REACT_APP_GITHUB_BASE_URL}/search/users?q=${textUser}`)
      .then((response) => {
        const users: object[] = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export { 
    fethDataUsers,
    ACTIONS,
};
  