import {
    SET_LOGIN_ERROR,
    SET_CREATE_ERROR,
    SET_UPDATE_ERROR
} from '../action-types';

const initialState = {
    loginError: '',
    createError: '',
    updateError: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.payload
            };
        }

        case SET_CREATE_ERROR: {
            return {
                ...state,
                createError: action.payload
            }
        }

        case SET_UPDATE_ERROR: {
            return {
                ...state,
                updateError: action.payload
            }
        }

        default: return state;
    }
};

export default reducer;
