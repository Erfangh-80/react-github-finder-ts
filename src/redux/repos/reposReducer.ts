import { ACTIONS } from "./reposActions"

type RepoState = {
    loading: Boolean,
    repos: [],
    error: string
}

const initialState: RepoState = {
    loading: false,
    repos: [],
    error: ""
}
export type Repo = {
    type: ACTIONS;
    payload?: any;
  };

const reducerRepos = (state: RepoState = initialState, action: Repo) => {
    switch(action.type){
        case ACTIONS.FETCH_REPOS_DATA_REQUESTS:
            return {
                ...state,
                loading: true,
            }
        case ACTIONS.FETCH_REPOS_DATA_SUCCESS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case ACTIONS.FETCH_REPOS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default: return state
    }
}

export default reducerRepos;
