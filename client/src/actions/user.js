import axios from "axios";
import {loginError, setUser} from "../redux/action-creators";

const BASE_URL = 'http://localhost:3000/';

const createUser = async (form) => {
    try {
        console.log(form)
        const response = await axios.post(BASE_URL, 'users', form);
    } catch (e) {
        alert(e);
    }
};

const login = (form) => {
    return async (dispatch) => {
        try {
            const { email, password } = form;

            if (!email && !password) {
                throw new Error('please fill in all fields');
            }

            dispatch(loginError(''));

            const response = await axios.post(BASE_URL + 'auth/login', {
                email,
                password
            });

            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            dispatch(loginError(e.message));
        }
    };
};

export {
    login,
    createUser
};