import {
    SET_LOGIN_ERROR,
    SET_CREATE_ERROR,
    SET_UPDATE_ERROR
} from '../action-types';

const setLoginError = error => ({type: SET_LOGIN_ERROR, payload: error});
const setCreateError = error => ({type: SET_CREATE_ERROR, payload: error});
const setUpdateError = error => ({type: SET_UPDATE_ERROR, payload: error});

export {
    setLoginError,
    setCreateError,
    setUpdateError
};
