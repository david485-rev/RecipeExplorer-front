import React from 'react'

function Register() {
    async function submitHandler(event: any) {
        // Prevent the browser from reloading the page
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // console.log(formData)
        // console.log(formData.get("email"));
        // console.log(formData.get("username"));
        // console.log(formData.get("password"));

        const data = {
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password")
        }

        console.log(data)

        const returnData = await fetch('http://localhost:8888/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        console.log(await returnData.json())
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

export default Register