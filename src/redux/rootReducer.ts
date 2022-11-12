import { combineReducers } from "redux"
import usersReducer from "./users/usersReducer"
import alertReducer from "./alert/alertReducer"

const rootReducer = combineReducers({
    usersState: usersReducer,
    alertState: alertReducer,
})

export default rootReducer