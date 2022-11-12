enum ACTIONS {
    SET_ALERT = "set_alert",
    REMOVE_ALERT = "remove_alert"
}

export type Alert = {
    type: string,
    payload?: string,
}

const setAlert = (msg: string) : Alert => {
    return { 
        type: ACTIONS.SET_ALERT,
        payload: msg
    }
}

const removeAlert = () : Alert => {
    return {
        type: ACTIONS.REMOVE_ALERT
    }
}

const showAlert = (msg: string): any => {
    return (dispatch: any) => {
        dispatch(setAlert(msg))
        setTimeout(() => dispatch(removeAlert()), 3000)
    }
}

export {
    ACTIONS,
    setAlert,
    showAlert
}