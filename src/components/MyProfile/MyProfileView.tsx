import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
export type ProfileInputType = {
    username: string,
    email: string,
    description: string,
    picture: string
}

function MyProfileView(props: any) {
    let [userInput, setUserInput] = useState<ProfileInputType>({username: "", email: "", description: "", picture: ""});
    let [message, setMessage] = useState("");

   
    function submitHandler(event: any) {
        event.preventDefault();

        try { 
            props.updateUser(userInput)
            setMessage("update Sucessful");
        } catch(error) {
            setMessage("update Failed");
        }

    }

    useEffect(() => {
        try {
            let uuid = '2d1395d9-0d90-4c0c-9cf1-d42bcfb2b780';
            axios.get(`http://localhost:8888/users/profile/${uuid}`).then((responseBody)=>{
            setUserInput(responseBody.data);
            })
        } catch(error) {
            console.error(error);
        }
    }, [])

    return (
        <>
        
            <form onSubmit={submitHandler}>
                <h1>My Profile</h1>
                <label htmlFor="username">Username:</label>
                <br/>
                <input type="text" value={userInput.username} onChange={(event: any) => setUserInput({...userInput, username: event.target.value})}/>
                <br/>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" value={userInput.email} onChange={(event: any) => setUserInput({...userInput, email: event.target.value})}/>
                <br/>
                <label htmlFor="description">Description:</label>
                <br/>
                <input type="text" value = {userInput.description} onChange={(event: any) => setUserInput({...userInput, description: event.target.value})}/>
                <br/>
                <label htmlFor="email">Email:</label>
                <br/>
                <img src = {userInput.picture}/>
                <input type="string" value = {userInput.picture} onChange={(event: any) => setUserInput({...userInput, picture: event.target.value})}/>
                <br/>
                <h6>{message}</h6>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </>    
    )
}
export default MyProfileView;