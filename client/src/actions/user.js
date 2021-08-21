import axios from "axios";

import {BASE_URL} from '../constants';

import {
    setLoginError,
    setAccessToken,
    setAdmin,
    setEmployee,
    setManager,
    setUser, setCreateError, setUpdateError
} from '../redux/action-creators';
import {setUsers} from '../redux/action-creators';

const login = (data) => {
    return async (dispatch) => {
        try {
            dispatch(setLoginError(''));

            const response = await axios.post(BASE_URL + 'auth/login', data);
            dispatch(setAccessToken(response.data.tokens.access_token));

            localStorage.setItem('role', response.data.currentUser);
            localStorage.setItem('accessToken', response.data.tokens.access_token);
            localStorage.setItem('refreshToken', response.data.tokens.refresh_token);

            if (response.data.currentUser === 'admin') dispatch(setAdmin());

            if (response.data.currentUser === 'manager') dispatch(setManager());

            if (response.data.currentUser === 'employee') dispatch(setEmployee());
        } catch (e) {
            dispatch(setLoginError(e.message));
        }
    };
};

const createUser = (data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: {Authorization: token}
        };

        try {
            await axios.post(BASE_URL + 'users', data, config);
        } catch (e) {
            dispatch(setCreateError(e.message));
        }
    };
};

const updateUser = (id, data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('accessToken');

        const config = {
            headers: {Authorization: token}
        };

        try {
            await axios.put(BASE_URL + `users/${id}`, data, config);
        } catch (e) {
            dispatch(setUpdateError(e.message));
        }
    };
};

const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + 'users');
            dispatch(setUsers(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const getUser = (id) => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };

    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + `users/${id}`, config);
            dispatch(setUser(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');

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
