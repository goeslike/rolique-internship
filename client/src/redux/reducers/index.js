import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import usersReducer from './users-reducer';
import roleReducer from './role-reducer';
import influencersReducer from './influencers-reducer';

export const reducer = combineReducers({
    userReducer,
    usersReducer,
    roleReducer,
    influencersReducer
});
