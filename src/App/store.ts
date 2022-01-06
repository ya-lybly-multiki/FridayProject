import {applyMiddleware, combineReducers, createStore} from "redux";
import {headerReducer} from "../components/Header/header-reducer";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "../components/Login/login-reducer";
import {newPasswordReducer} from "../components/NewPassword/newPassword-reducer";
import {pageErrorReducer} from "../components/Page404/pageError-reducer";
import {profileReducer} from "../components/Profile/profile-reducer";
import {recoveryReducer} from "../components/RecoveryPassword/recovery-reducer";
import {userRegistrationReducer} from "../components/UserRegistration/userRegistration-reducer";


const rootReducer = combineReducers({
    headerReducer,
    loginReducer,
    newPasswordReducer,
    pageErrorReducer,
    profileReducer,
    recoveryReducer,
    userRegistrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))