import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import errorImg from "../../assets/messages-icons/error.png";
import {login} from "../../actions/user";

import {LoginButton, LoginContainer, LoginError, LoginForm, LoginTitle} from "./Login.style";
import {Input, Label} from "../Inputs/CreateInputs.style";

const Login = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(({userReducer: {loginError}}) => loginError);

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeFormHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <LoginContainer>
            <LoginForm>
                <LoginTitle>Log into your account</LoginTitle>
                <LoginError style={{display: loginError ? 'flex' : 'none'}}>
                    <img src={errorImg} alt="error-img"/>
                    { loginError }
                </LoginError>

                <Label>Email</Label>
                <Input
                    id='email'
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={changeFormHandler}/>

                <Label>Password</Label>
                <Input
                    id='password'
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={changeFormHandler}/>

                <LoginButton type='button' onClick={() => dispatch(login(form))}>Log in</LoginButton>
            </LoginForm>

        </LoginContainer>
    );
};

export default Login;