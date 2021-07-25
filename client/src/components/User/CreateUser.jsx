import React, {useState} from 'react';
import infoIcon from '../../assets/info-icon.png';

import {createUser} from '../../actions/user';

import {
    UserWrapper,
    UserContainer,
    UserFirstSection,
    UserSecondSection,
    UserSectionTitle
} from './CreateUser.style';

import {
    Input,
    Label,
    PictureInput,
    Select
} from "../Inputs/CreateInputs.style";

import CreateHeader from '../Header/CreateHeader';

const CreateUser = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        password: ''
    });

    const changeFormHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const sendUser = async () => {
        await createUser(form);
        setForm({firstName: '',
            lastName: '',
            email: '',
            phone: '',
            role: '',
            password: ''})
    };

    return (
        <UserWrapper>
            <CreateHeader title='Create Internal User' buttonText='Save Changes' func={sendUser}/>

            <UserContainer>
                <UserFirstSection>
                    <UserSectionTitle>General</UserSectionTitle>

                    <Label>Profile Picture</Label>
                    <PictureInput
                        id='profilePicture'
                        name='profilePicture'
                        type='file'/>

                    <Label>First Name</Label>
                    <Input
                        id='firstName'
                        name='firstName'
                        type='text'
                        required
                        value={form.firstName}
                        onChange={changeFormHandler}/>

                    <Label>Last Name</Label>
                    <Input
                        id='lastName'
                        name='lastName'
                        type='text'
                        required
                        value={form.lastName}
                        onChange={changeFormHandler}/>

                    <Label>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        required
                        value={form.email}
                        onChange={changeFormHandler}/>

                    <Label>Phone</Label>
                    <Input
                        id='phone'
                        name='phone'
                        type='tel'
                        value={form.phone}
                        onChange={changeFormHandler}/>

                </UserFirstSection>

                <UserSecondSection>
                    <UserSectionTitle>
                        Role & Permissions
                        <img src={infoIcon} alt="infoIcon"/>
                    </UserSectionTitle>

                    <Label>Role</Label>
                    <Select
                        id='select'
                        name='role'
                        type='select'
                        value={'Select...'}
                        required
                        onChange={changeFormHandler}>
                        {/*<option value='' disabled selected hidden>Select...</option>*/}
                        <option value='Admin'>Admin</option>
                        <option value='Manager'>Manager</option>
                        <option value='Employee'>Employee</option>
                    </Select>

                    <UserSectionTitle>Password</UserSectionTitle>

                    <Label>Set Password</Label>
                    <Input
                        id='password'
                        name='password'
                        type='password'
                        required
                        value={form.password}
                        onChange={changeFormHandler}/>

                </UserSecondSection>
            </UserContainer>
        </UserWrapper>
    );
};

export default CreateUser;