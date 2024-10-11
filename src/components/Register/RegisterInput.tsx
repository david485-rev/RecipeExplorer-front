import React, { useState } from 'react'

type RegisterInputType = {
    email: string,
    username: string,
    password: string
}

function RegisterInput(props: any) {

    // const [status, setStatus] = useState(0)

    async function registerUser(data: RegisterInputType) {
        try {
            const result = await fetch('http://localhost:8888/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            //return result.json(); // gives back an object with a message attribute
            return result;
        } catch(err) {
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

        const result = await registerUser(data);
        props.setStatus(result?.status);
        console.log(result?.status)
    }

  return (
    <>
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='email'/>
            <br/>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder='username'/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='password'/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default RegisterInput