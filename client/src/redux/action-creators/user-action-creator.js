import { LOGOUT, LOGIN_ERROR } from '../action-types';

const loginError = error => ({type: LOGIN_ERROR, payload: error});
const logout = () => ({type: LOGOUT});

export {
    loginError,
    logout
};