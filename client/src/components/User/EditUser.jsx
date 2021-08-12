import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {createSchema} from "../../validators/user-schema";
import CreateHeader from "../Header/CreateHeader";
import { updateUser } from '../../actions/user';

import infoIcon from "../../assets/info-icon.png";

import {UserContainer, UserFirstSection, UserSecondSection, UserSectionTitle, UserWrapper} from "./CreateUser.style";
import {FileLabel, HelperText, Input, Label, Select} from "../Inputs/CreateInputs.style";

const EditUser = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const adminAccess = useSelector(({roleReducer: {adminAccess}}) => adminAccess);
    const user = useSelector(({userReducer: {user}}) => user);

    const defaultValues = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user?.phone,
        role: user.role,
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const sendEditData = async (data) => {
        const formData = new FormData();

        for (let key in data) {
            if (key === 'avatar') {
                formData.append(key, data[key][0])
            }
            if (data[key] !== '') {
                formData.append(key, data[key])
            }
        }

        await updateUser(user.id, formData);
        reset();
    };

    return (
        <UserWrapper>
            <CreateHeader title='Edit Internal User' buttonText='Save Changes' form='edit-form'/>

            <form id={'edit-form'} onSubmit={handleSubmit(sendEditData)} noValidate>
                <UserContainer>
                    <UserFirstSection>
                        <UserSectionTitle>General</UserSectionTitle>

                        <Label>Profile Picture</Label>
                        <Input
                            style={{display: 'none'}}
                            {...register('avatar')}
                            id='avatar'
                            type='file'
                            accept='image/*'
                            onInput={(event) => {
                                const file = event.target.files[0];
                                if (file) {
                                    setImage(file);
                                } else {
                                    setImage(null);
                                }
                            }}
                        />
                        <FileLabel style={{backgroundImage: `url(${preview ? preview : user.avatar})`}} htmlFor='avatar' />

                        <Label>First Name</Label>
                        {errors?.firstname?.message && <HelperText>{errors?.firstname?.message}</HelperText>}
                        <Input
                            {...register('firstname', {required: true})}
                            id='firstName'
                            type='text'/>

                        <Label>Last Name</Label>
                        {errors?.lastname?.message && <HelperText>{errors?.lastname?.message}</HelperText>}
                        <Input
                            {...register('lastname', {required: true})}
                            id='lastname'
                            type='text'/>

                        <Label>Email</Label>
                        {errors?.email?.message && <HelperText>{errors?.email?.message}</HelperText>}
                        <Input
                            {...register('email', {required: true})}
                            id='email'
                            type='email'/>

                        <Label>Phone</Label>
                        {errors?.phone?.message && <HelperText>{errors?.phone?.message}</HelperText>}
                        <Input
                            {...register('phone', {required: true})}
                            id='phone'
                            type='tel'
                        />

                    </UserFirstSection>

                    <UserSecondSection>
                        <UserSectionTitle>
                            Role & Permissions
                            <img src={infoIcon} alt="infoIcon"/>
                        </UserSectionTitle>

                        <Label>Role</Label>
                        {errors?.role?.message && <HelperText>{errors?.role?.message}</HelperText>}
                        <Select
                            {...register('role', {required: true})}
                            id='role'
                            type='select'>
                            {/*<option value='' disabled selected hidden>Select...</option>*/}
                            {adminAccess && <option value='admin'>Admin</option>}
                            <option value='manager'>Manager</option>
                            <option value='employee'>Employee</option>
                        </Select>

                        <UserSectionTitle>Password</UserSectionTitle>

                        <Label>Set Password</Label>
                        {errors?.password?.message && <HelperText>{errors?.password?.message}</HelperText>}
                        <Input
                            {...register('password', {required: true})}
                            id='password'
                            type='password'/>

                    </UserSecondSection>
                </UserContainer>
            </form>
        </UserWrapper>
    );
};

export default EditUser;
