import React, { useState } from 'react'
import LoginInput, { LoginInputType } from './LoginView';
import axios from 'axios';

const config = require("../../config");

const URL = `${config.path}`;

function LoginContainer(props: any) {


    async function login(user: LoginInputType) {
        try {
            let response: any = await getUser(user);
            props.setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getUser(user: LoginInputType) {
        try {
            let response = await axios.post(`${URL}/users/login`, user);
            //console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <LoginInput login={login} />
        </>
    )
}

export default LoginContainer