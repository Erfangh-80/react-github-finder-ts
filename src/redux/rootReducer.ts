import { combineReducers } from "redux"
import usersReducer from "./users/usersReducer"
import userReducer from "./user/userReducer"
import alertReducer from "./alert/alertReducer"

const rootReducer = combineReducers({
    usersState: usersReducer,
    userState: userReducer,
    alertState: alertReducer,
})

export default rootReducer