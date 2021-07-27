import { LOGOUT, LOGIN_ERROR, SET_USER } from '../action-types';

const initialState = {
    loginError: '',
    currentUser: {},
    user: {},
    isAuth: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }

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