import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from '../../validators/user-schema';

import errorImg from "../../assets/messages-icons/error.png";

import {login} from "../../actions/user";

import { LoginButton, LoginContainer, LoginError, LoginForm, LoginTitle } from './Login.style';
import {HelperText, Input, Label} from "../Inputs/CreateInputs.style";

const Login = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(({errorsReducer: {loginError}}) => loginError);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(loginSchema),
    });

    const sendData = (data) => {
        dispatch(login(data));
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit(sendData)} noValidate>
                <LoginTitle>Log into your account</LoginTitle>
                <LoginError style={{display: loginError ? 'flex' : 'none'}}>
                    <img src={errorImg} alt="error-img"/>
                    { loginError }
                </LoginError>

                <Label>Email</Label>
                {errors?.email?.message && <HelperText>{errors?.email?.message}</HelperText>}
                <Input
                    {...register('email', {required: true})}
                    id='email'
                    type='email'
                    error={!!errors.email}
                    required={errors?.firstname}
                />

                <Label>Password</Label>
                {errors?.password?.message && <HelperText>{errors?.password?.message}</HelperText>}
                <Input
                    {...register('password', {required: true})}
                    id='password'
                    type='password'
                    error={!!errors.loginPassword}
                    required={errors?.lastname}
                />

                <LoginButton type={'submit'}>Log in</LoginButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
