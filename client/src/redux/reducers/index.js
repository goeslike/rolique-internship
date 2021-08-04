import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import usersReducer from './users-reducer';
import roleReducer from './role-reducer';

export const reducer = combineReducers({
    userReducer,
    usersReducer,
    roleReducer
});
