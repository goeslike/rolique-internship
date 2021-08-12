import {
    LOGOUT,
    SET_ACCESS_TOKEN,
    SET_USER
} from '../action-types';

const setAccessToken = response => ({type: SET_ACCESS_TOKEN, payload: response});
const setUser = response => ({type: SET_USER, payload: response});
const logout = () => ({type: LOGOUT});

export {
    logout,
    setAccessToken,
    setUser
};
