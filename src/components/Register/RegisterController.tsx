import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterView from './RegisterView';
import axios, { AxiosError } from 'axios';

const config = require("../../config");

const URL = `${config.path}`;

function RegisterController() {
    const navigate = useNavigate();
    let [responseMessage, setResponseMessage] = useState<string>("");

    async function registerUser(data: {email: string, username: string, password: string}) {
        try {
            let result: any = await axios.post(`${URL}/users/register`, data);
            
            setResponseMessage(result.data.message);

            //console.log(result.data)
            navigate("/login");
        } catch (error: any) {
            // Axios throws an error if status code is 400
            console.error(error.response.data.message);
            
            setResponseMessage(error.response.data.message);

            // console.error(error);
        }
    }

  return (
    <>
        <RegisterView registerUser={registerUser} responseMessage={responseMessage}/>
        <h4>Have an account already? <Link to="/login">Sign in</Link></h4>
    </>
    
  )
}

export default RegisterController