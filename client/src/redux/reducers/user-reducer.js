import { LOGOUT, LOGIN_ERROR } from '../action-types';

const initialState = {
    loginError: '',
    isAuth: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT: {
            localStorage.removeItem('token');
            return  {
                ...state,
                currentUser: {},
                isAuth: false,

            }
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.payload
            }
        }

        default: return state;
    }
};

export default reducer;