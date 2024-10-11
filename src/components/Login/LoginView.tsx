import React, { useState } from 'react'

export type LoginViewType = {
    username: string,
    password: string
}

function LoginView(props: any) {

    const [userInput, setUserInput] = useState<LoginViewType>({ username: "", password: "" });

    function handleSubmit(event: any) {
        event.preventDefault();
        props.login(userInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })} />
            <input type='password' placeholder='password' onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })} />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default LoginView