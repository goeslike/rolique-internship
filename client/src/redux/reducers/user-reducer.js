import {
    LOGOUT,
    SET_LOGGED_USER_ROLE,
    SET_ACCESS_TOKEN,
    SET_USER
} from '../action-types';

const initialState = {
    accessToken: 'asdf',
    user: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_USER_ROLE: {
            return {
                ...state,
                currentUserRole: action.payload,
            }
        }

        case SET_ACCESS_TOKEN: {
            return {
                ...state,
                accessToken: action.payload
            }
        }

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
            }
        }

        default: return state;
    }
};

export default reducer;
