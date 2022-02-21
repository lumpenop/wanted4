import { SET_ID, SET_DEVICE_NAME } from "../action/action";
import { combineReducers } from "redux";

const userInitState = {
    id: "",
    deviceName: "",
};

const saveUser = (state = userInitState, action) => {
    switch(action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.id
            };
        case SET_DEVICE_NAME:
            return {
                ...state,
                deviceName: action.deviceName
            };
        default:
            return state;
    }
}

const saveUserApp = combineReducers({
    saveUser
});

export default saveUserApp;