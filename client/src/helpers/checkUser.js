import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setAdmin, setEmployee, setManager } from '../redux/action-creators';

export const CheckUser = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(({userReducer: {accessToken}}) => accessToken);

    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');

    if (token) {
        dispatch(setAccessToken(token));
    }

    if (role === 'admin') dispatch(setAdmin());

    if (role === 'manager') dispatch(setManager());

    if (role === 'employee') dispatch(setEmployee());

    return accessToken;
};
