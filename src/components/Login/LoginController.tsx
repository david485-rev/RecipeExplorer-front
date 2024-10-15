import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginView, { LoginViewType } from './LoginView';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';

const config = require("../../config");

const URL = `${config.path}`;

function LoginController(props: any) {
    const user = useContext(UserContext);

    async function login(newUser: LoginViewType) {
        try {
            let response: any = await getUser(newUser);
            props.setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getUser(user: LoginViewType) {
        try {
            let response = await axios.post(`${URL}/users/login`, user);
            //console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async function getUserData(){
        try{
            let response = await axios.post(`${URL}/users/user-by-token`);
            console.log(response);
            return response;
        }catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <h1>Sign in</h1>
            <LoginView login={login} />
            <h4>Need to make an account? <Link to="/register">Sign up</Link></h4>
        </>
    )
}

export default LoginController