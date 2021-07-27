import { SET_USER, LOGOUT, LOGIN_ERROR } from '../action-types';

const setUser = response => ({type: SET_USER, payload: response});
const loginError = error => ({type: LOGIN_ERROR, payload: error});
const logout = () => ({type: LOGOUT});

export {
    setUser,
    loginError,
    logout
};