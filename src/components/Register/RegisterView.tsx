import React, { useState } from 'react'
import './RegisterInput.css'

export type RegisterViewType = {
    email: string,
    username: string,
    password: string
}

function RegisterView(props: any) {
    const [userInput, setUserInput] = useState<RegisterViewType>({ email: "", username: "", password: "" });
    
    function emailInputHelp(msg: string) {
        switch(msg) {
            case 'email used already':
                return <>
                    <input type="email" name="email" placeholder='email' className="form-control is-invalid" id="inputEmail" value={userInput.email} onChange={(e: any) => setUserInput({ ...userInput, email: e.target.value })}/>
                    <div id="serverEmailFeedback" className="invalid-feedback">Email already registered.</div>
                </>
            case 'missing email':
                return <>
                    <input type="email" name="email" placeholder='email' className="form-control is-invalid" id="inputEmail" value={userInput.email} onChange={(e: any) => setUserInput({ ...userInput, email: e.target.value })}/>
                    <div id="serverEmailFeedback" className="invalid-feedback">Please provide an email.</div>
                </>
                
            default:
                return <input type="email" name="email" placeholder='email' className="form-control" id="inputEmail" value={userInput.email} onChange={(e: any) => setUserInput({ ...userInput, email: e.target.value })}/>;
        }
    }

    function usernameInputHelp(msg: string) {
        switch(msg) {
            case 'user with username already exists!':
                return <>
                    <input type="text" name="username" placeholder='username' className="form-control is-invalid" id="inputUsername" value={userInput.username} onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })}/>
                    <div id="serverUsernameFeedback" className="invalid-feedback">Username already taken.</div>
                </>
            case 'missing username':
                return <>
                    <input type="text" name="username" placeholder='username' className="form-control is-invalid" id="inputUsername" value={userInput.username} onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })}/>
                    <div id="serverUsernameFeedback" className="invalid-feedback">Please choose a username.</div>
                </>
            default:
                return <input type="text" name="username" placeholder='username' className="form-control" id="inputUsername" value={userInput.username} onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })}/>;
        }
    }

    function passwordInputHelp(msg: string) {
        switch(msg) {
            case 'missing password':
                return <>
                    <input type="password" name="password" placeholder='password' className="form-control is-invalid" id="inputPassword" value={userInput.password} onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })}/>
                    <div id="serverPasswordFeedback" className="invalid-feedback">Please provide a password.</div>;
                </>
            default:
                return <input type="password" name="password" placeholder='password' className="form-control" id="inputPassword" value={userInput.password} onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })}/>
        }
    }

    function submitHandler(event: any) {
        // Prevent the browser from reloading the page
        event.preventDefault();
        
        const form: HTMLFormElement = event.target;
        const formData = new FormData(form);

        const data = {
            email: formData.get("email") as string,
            username: formData.get("username") as string,
            password: formData.get("password") as string
        }; // console.log(data): {email: 'test@gmail', username: 'wasdga', password: 'wa'}

        props.registerUser(data);
    }

    return (
        <>
            <h1>Sign up</h1>
            <form id='registerForm' onSubmit={submitHandler} aria-label="form">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label"></label>
                    {/* <input type="email" name="email" placeholder='email' className="form-control is-invalid" id="inputEmail" aria-describedby="serverEmailFeedback" /> */}
                    {
                        emailInputHelp(props.responseMessage)
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label"></label>
                    {/* <input type="text" name="username" placeholder='username' className="form-control" id="inputUsername" aria-describedby="usernameHelp" /> */}
                    {
                        usernameInputHelp(props.responseMessage)
                    }
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label"></label>
                    {/* <input type="password" name="password" placeholder='password' className="form-control is-invalid" id="inputPassword" /> */}
                    {
                        passwordInputHelp(props.responseMessage)
                    }
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button type="reset" className="btn btn-danger mx-3">Reset</button>
                </div>
            </form>
        </>
    )
}

export default RegisterView