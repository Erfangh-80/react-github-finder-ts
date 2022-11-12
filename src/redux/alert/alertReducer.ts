import { ACTIONS, Alert } from "./alertActions"

type AlertState = null | string

const initialState: AlertState = null

const reducer = (state: AlertState = initialState, action: Alert) => {
    switch(action.type){
        case ACTIONS.SET_ALERT:
            return action.payload
        case ACTIONS.REMOVE_ALERT:
            return null
        default: 
            return state
            
    }   
}

export default reducer