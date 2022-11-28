import axios from "axios";

enum ACTIONS {
  FETCH_REPOS_DATA_REQUESTS = "fetch_repos_data_requests",
  FETCH_REPOS_DATA_SUCCESS = "fetch_repos_data_success",
  FETCH_REPOS_DATA_FAILURE = "fetch_repos_data_failure",
}



const fetchDataRequest = () => {
  return {
    type: ACTIONS.FETCH_REPOS_DATA_REQUESTS,
  };
};

const fetchDataSuccess = (users: object[]) => {
  return {
    type: ACTIONS.FETCH_REPOS_DATA_SUCCESS,
    payload: users,
  };
};

const fetchDataFailure = (errorMessage: string) => {
  return {
    type: ACTIONS.FETCH_REPOS_DATA_FAILURE,
    payload: errorMessage,
  };
};

const fetchDataRepos = (login: string | undefined ): any => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest()); 
    axios
      .get(`${process.env.REACT_APP_GITHUB_BASE_URL}/users/${login}/repos`)
      .then((response) => {
        const repos = response.data;
        dispatch(fetchDataSuccess(repos))
      }).catch(error => {
        dispatch(fetchDataFailure(error.message))
      });
  };
};

export { ACTIONS, fetchDataRepos };
