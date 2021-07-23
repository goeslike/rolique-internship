import { SET_USER, LOGOUT, LOGIN_ERROR } from '../action-types';

const initialState = {
    currentUser: {},
    loginError: '',
    isAuth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
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
                loginError: action.payload.error
            }
        }

        default: return state;
    }
};

export default reducer;