import React from 'react';
import {UsersWrapper} from "./Users.style";
import ViewHeader from '../Header/ViewHeader';

const Users = () => {
    return (
        <UsersWrapper>
            <ViewHeader title='Users' />
        </UsersWrapper>
    );
};

export default Users;