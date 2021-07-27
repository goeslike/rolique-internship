import {SET_USERS} from '../action-types';

const setUsers = response => ({type: SET_USERS, payload: response});

export {
    setUsers
};