import {
    SET_ADMIN,
    SET_MANAGER,
    SET_EMPLOYEE
} from '../action-types';

const initialState = {
    adminAccess: false,
    managerAccess: false,
    employeeAccess: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN: {
            return {
                ...state,
                adminAccess: true
            };
        }

        case SET_MANAGER: {
            return {
                ...state,
                managerAccess: true
            };
        }

        case SET_EMPLOYEE: {
            return {
                ...state,
                employeeAccess: true
            };
        }

        default: return state;
    }
};

export default reducer;
