import { ACTIONS, dataState } from "./usersActions"

type state = {
    loading: boolean;
    users: [];
    error: string;
}

const initialState: state = {
    loading: false,
    users: [],
    error: ""
}

const reducer = (state: state = initialState, action: dataState) => {
    switch(action.type){
        case ACTIONS.FETCH_USERS_DATA_REQUESTS:
            return {
                ...state,
                loading: true
            }
        case ACTIONS.FETCH_USERS_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
            
        case ACTIONS.FETCH_USERS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case ACTIONS.FETCH_CLEAR_DATA:
            return {
                ...state,
                users: [],
            }
        default: return state
    }
}

export default reducer