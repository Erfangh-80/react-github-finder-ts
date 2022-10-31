import { ACTIONS, dataState } from "./usersActions"

type state = {
    loading: boolean;
    users: unknown;
    error: string;
}

const initialState: state = {
    loading: false,
    users: [],
    error: ""
}

const reducer = (state: state = initialState, action: dataState) => {
    switch(action.type){
        case ACTIONS.FETCH_DATA_REQUESTS:
            return {
                ...state,
                loading: true
            }
        case ACTIONS.FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
            
        case ACTIONS.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default reducer