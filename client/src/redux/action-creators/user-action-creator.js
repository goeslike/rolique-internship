import { SET_USER, LOGOUT, LOGIN_ERROR } from '../action-types';

const setUser = user => ({type: SET_USER, payload: user});
const loginError = error => ({type: LOGIN_ERROR, payload: error});
const logout = () => ({type: LOGOUT});

export {
    setUser,
    loginError,
    logout
};