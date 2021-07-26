import axios from "axios";
import {loginError} from "../redux/action-creators";

const BASE_URL = 'http://localhost:5000/';

const createUser = async (form) => {
    try {
        await axios.post(BASE_URL, 'users', form);
    } catch (e) {
        console.log(e);
    }
};

const login = (form) => {
    return async (dispatch) => {
        try {
            dispatch(loginError(''));

            const response = await axios.post(BASE_URL + 'auth/login', form);

            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('refreshToken', response.data.refresh_token);
        } catch (e) {
            dispatch(loginError(e.message));
        }
    };
};

export {
    login,
    createUser
};