import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import profile from "../m1-ui/pages/profile";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store