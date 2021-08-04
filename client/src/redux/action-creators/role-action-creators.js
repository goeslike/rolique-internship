import {
    SET_ADMIN,
    SET_MANAGER,
    SET_EMPLOYEE
} from '../action-types/lore-action-types';

const setAdmin = () => ({type: SET_ADMIN});
const setManager = () => ({type: SET_MANAGER});
const setEmployee = () => ({type: SET_EMPLOYEE});

export {
    setAdmin,
    setManager,
    setEmployee
};
