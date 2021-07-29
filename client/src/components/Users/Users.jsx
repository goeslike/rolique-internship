import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import editIcon from '../../assets/edit-icon.png';

import ViewHeader from '../Header/ViewHeader';
import {getUser, getUsers} from "../../actions/user";

import {UsersWrapper, UsersContainer, UsersTable, UsersTD, UsersTR} from "./Users.style";

const Users = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(({usersReducer: {users}}) => users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const redirect = (id) => {
        history.push(`/users/edit/id${id}`);
    };

    const getUserById = async (id) => {
        await dispatch(getUser(id));
    }

    return (
        <UsersWrapper>
            <ViewHeader title='Users' />

            <UsersContainer>

                <UsersTable>
                    <thead style={{marginBottom: '5px'}}>
                        <UsersTR>
                            <th style={{width: '250px'}}>Name</th>
                            <th style={{width: '225px'}}>email</th>
                            <th style={{width: '215px'}}>Role</th>
                            <th style={{width: '295px'}}>Phone</th>
                            <th style={{width: '28px'}}></th>
                        </UsersTR>
                    </thead>

                    <tbody>
                        {users.map(user => {
                            return (
                                <UsersTR key={user.id}>
                                    <UsersTD style={{width: '250px'}}>
                                        {user.avatar && <img src={user.avatar} alt=''/>}
                                        {user.name} {user.lastname}
                                    </UsersTD>
                                    <UsersTD style={{width: '225px'}}>{user.email}</UsersTD>
                                    <UsersTD style={{width: '215px'}}>{user.role}</UsersTD>
                                    <UsersTD style={{width: '295px'}}>{user.phone}</UsersTD>
                                    <UsersTD onClick={async() => {
                                        await getUserById(user.id)
                                        redirect(user.id)
                                    }} style={{width: '28px'}}>
                                        <img src={editIcon} alt='editIcon' />
                                    </UsersTD>
                                </UsersTR>
                            );
                        })}
                    </tbody>

                </UsersTable>

            </UsersContainer>
        </UsersWrapper>
    );
};

export default Users;