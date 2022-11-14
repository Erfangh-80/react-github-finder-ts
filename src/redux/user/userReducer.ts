import { ACTIONS, User } from "./userActions";

type UserState = {
    loading: Boolean
    user: Object
    error: string
}

const initialState: UserState = {
    loading: false,
    user: {},
    error: ""
}

const reducer = (state: UserState = initialState, action: User) => {
    switch(action.type){
        case ACTIONS.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTIONS.FETCH_DATA_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
            
        case ACTIONS.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

export default reducer