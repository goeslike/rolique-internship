import {
    SET_LOGGED_USER_ROLE,
    LOGOUT,
    LOGIN_ERROR,
    SET_ACCESS_TOKEN,
    SET_USER
} from '../action-types';

const setLoggedUser = response => ({type: SET_LOGGED_USER_ROLE, payload: response});
const setAccessToken = response => ({type: SET_ACCESS_TOKEN, payload: response});
const setUser = response => ({type: SET_USER, payload: response});
const loginError = error => ({type: LOGIN_ERROR, payload: error});
const logout = () => ({type: LOGOUT});

export {
    setLoggedUser,
    loginError,
    logout,
    setAccessToken,
    setUser
};