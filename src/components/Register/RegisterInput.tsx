import React, { useState } from 'react'
import { ResponseBody } from './RegisterContainer';
import './RegisterInput.css'

type RegisterInputType = {
    email: string,
    username: string,
    password: string
}

function RegisterInput(props: any) {

    //const [status, setStatus] = useState(0)

    async function registerUser(data: RegisterInputType) {
        try {
            const result = await fetch('http://localhost:8888/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const status = result.status;
            const resultData = await result.json();
            const message = resultData.message;

            const response: { status: number, message: string } = {
                status: status,
                message: message
            }

            return response;
        } catch (err) {
            console.log(err)
        }
    }

    async function submitHandler(event: any) {
        // Prevent the browser from reloading the page
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const data = {
            email: formData.get("email") as string,
            username: formData.get("username") as string,
            password: formData.get("password") as string
        }

        try {
            const result: ResponseBody | undefined = await registerUser(data);

            if (!result) {
                throw new Error();
            }

            props.setResponseData({ status: result.status, message: result.message });
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form id='registerForm' onSubmit={submitHandler} aria-label="form">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="htmlForm-label"></label>
                    <input type="email" name="email" placeholder='email' className="htmlForm-control" id="inputEmail" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" className="htmlForm-text">Email must be unique.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="htmlForm-label"></label>
                    <input type="text" name="username" placeholder='username' className="htmlForm-control" id="inputUsername" aria-describedby="emailHelp"/>
                    {/* <div id="usernameHelp" className="htmlForm-text">Username must be unique.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="htmlForm-label"></label>
                    <input type="password" name="password" placeholder='password' className="htmlForm-control" id="inputPassword"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button type="reset" className="btn btn-danger mx-3">Reset</button>
                </div>
            </form>
        </>


    )
}

export default RegisterInput