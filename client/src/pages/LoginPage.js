import React, {useState} from 'react';
import errorImg from '../assets/messages-icons/error.png'
import {
    LoginContainer,
    LoginForm,
    LoginButton, LoginError,
    LoginInput,
    LoginLabel,
    LoginTitle
} from '../components';
import {login} from "../actions/user";
import {useDispatch, useSelector} from "react-redux";

const LoginPage = () => {
    const loginError = useSelector(({userReducer: {loginError}}) => loginError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    return (
        <LoginContainer>
            <LoginForm>
                <LoginTitle>Log into your account</LoginTitle>
                <LoginError style={{display: loginError ? 'flex' : 'none'}}>
                    <img src={errorImg} alt="error-img"/>
                    Incorrect email or password
                </LoginError>

                <LoginLabel>Email</LoginLabel>
                <LoginInput
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={({target: {value}}) => setEmail(value)}/>

                <LoginLabel>Password</LoginLabel>
                <LoginInput
                    id='password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}/>

                <LoginButton onClick={() => dispatch(login(email, password))}>Log in</LoginButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default LoginPage;