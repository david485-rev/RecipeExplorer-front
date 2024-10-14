import React, { useState } from 'react'
import LoginView, { LoginViewType } from './LoginView';
import axios from 'axios';

const config = require("../../config");

const URL = `${config.path}`;

function LoginController(props: any) {


    async function login(user: LoginViewType) {
        try {
            let response: any = await getUser(user);
            props.setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getUser(user: LoginViewType) {
        try {
            let response = await axios.post(`${URL}/users/login`, user);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <LoginView login={login} />
        </>
    )
}

export default LoginController