import axios from "axios";
import {loginError, setUser} from "../redux/action-creators";

const BASE_URL = 'http://localhost:5000/';

export const login = async (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(BASE_URL + 'users/login', {
                email,
                password
            });

            console.log('POSTED')
            dispatch(loginError(''));
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            dispatch(loginError(e.message));
        }
    }
}