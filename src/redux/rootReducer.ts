import { combineReducers } from "redux"
import usersReducer from "./users/usersReducer"
import userReducer from "./user/userReducer"
import alertReducer from "./alert/alertReducer"
import reposReducer from "./repos/reposReducer"

const rootReducer = combineReducers({
    usersState: usersReducer,
    userState: userReducer,
    alertState: alertReducer,
    reposState: reposReducer,
})

export default rootReducer