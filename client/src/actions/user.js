import axios from "axios";
import {loginError, setUser} from "../redux/action-creators";
import {setUsers} from "../redux/action-creators/users-action-creators";

const BASE_URL = 'http://localhost:5000/';

const createUser = async (form) => {
    try {
        console.log(form)
        await axios.post(BASE_URL + 'users', form);
    } catch (e) {
        console.log(e);
    }
};

const login = (data) => {
    return async (dispatch) => {
        try {
            dispatch(loginError(''));

            const response = await axios.post(BASE_URL + 'auth/login', data);

            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('refreshToken', response.data.refresh_token);
        } catch (e) {
            dispatch(loginError(e.message));
        }
    };
};

const getUsers = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('accessToken');

            const response = await axios.get(BASE_URL + 'users', {
                headers: {Authorization: token}
            });

            console.log(response.data)

            dispatch(setUsers(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

const getUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + `users/${id}`);

            dispatch(setUser(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

const updateUser = async (id, data) => {
    try {
        await axios.put(BASE_URL + `users/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export {
    login,
    createUser,
    getUsers,
    getUser
};