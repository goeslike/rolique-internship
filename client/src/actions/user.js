import axios from "axios";

import {BASE_URL} from '../constants';

import {loginError, setAccessToken, setUser} from "../redux/action-creators";
import {setUsers} from '../redux/action-creators';

const createUser = async (data) => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };

    try {
        await axios.post(BASE_URL + 'users', data, config);
    } catch (e) {
        console.log(e);
    }
};

const login = (data) => {
    return async (dispatch) => {
        try {
            dispatch(loginError(''));

            const response = await axios.post(BASE_URL + 'auth/login', data);
            dispatch(setAccessToken(response.data.tokens.access_token));
            console.log(response.data.currentUser);

            localStorage.setItem('role', response.data.currentUser);
            localStorage.setItem('accessToken', response.data.tokens.access_token);
            localStorage.setItem('refreshToken', response.data.tokens.refresh_token);
        } catch (e) {
            dispatch(loginError(e.message));
        }
    };
};

const getUsers = () => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };

    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + 'users', config);
            dispatch(setUsers(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const getUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + `users/${id}`);
            dispatch(setUser(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const updateUser = async (id, data) => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };
    try {
        await axios.put(BASE_URL + `users/${id}`, data, config);
    } catch (e) {
        console.log(e);
    }
};

const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        dispatch(setAccessToken(''));
    };
};

export {
    login,
    createUser,
    getUsers,
    getUser,
    updateUser,
    logOut
};
