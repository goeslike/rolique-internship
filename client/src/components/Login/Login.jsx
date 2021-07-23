import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import errorImg from "../../assets/messages-icons/error.png";
import {login} from "../../actions/user";

import {LoginButton, LoginContainer, LoginError, LoginForm, LoginInput, LoginLabel, LoginTitle} from "./Login.style";

const Login = () => {
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

export default Login;