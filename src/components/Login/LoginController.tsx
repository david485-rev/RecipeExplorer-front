import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginView, { LoginViewType } from './LoginView';
import axios, { AxiosRequestConfig } from 'axios';
import { UserContext } from '../Context/UserContext';

const config = require("../../config");

const URL = `${config.path}`;

function LoginController(props: any) {
    const navigate = useNavigate();
    async function login(newUser: LoginViewType) {
        try {
            
            const tokenResponse: any = await getUser(newUser);
            if (!tokenResponse  || tokenResponse?.status > 399) {
                throw new Error("Error Retrieving Token")
            } else{
                navigate("/");
                //props.setUser(tokenResponse.data);
                const dataResponse: any = await getUserData(tokenResponse.data.token);
                if (dataResponse?.status === 403) {
                    throw new Error("Error getting user data with token")
                }
                const userData = { ...tokenResponse.data, ...dataResponse.data }
                //console.log(userData)
                props.setUser(userData)
            }
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

    async function getUserData(token:string){
        try{
            const header: AxiosRequestConfig = {headers: {Authorization: `Bearer ${token}`}}
            let response = await axios.get(`${URL}/users/user-by-token`, header);
            //console.log(response);
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