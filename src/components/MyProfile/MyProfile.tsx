import React, { useEffect, useState } from 'react'

function MyProfile() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [description, setDescription] = useState("");
    let [picture, setPicture] = useState("");
        
    useEffect(() => {
        async function getProfile(){
            let token = 'uuid';
            let response = await fetch(`http://localhost/3000/profile/${token}`);
            let responseBody = await response.json();
            setName(responseBody.username);
            setEmail(responseBody.email);
            setDescription(responseBody.description);
            setPicture(responseBody.picture);
        }       
        getProfile();    
    }, [])
    

    function submitHandler(event: any) {
        event.preventDefault();
        setName(name);
        setEmail(email);
        setDescription(description);
        setPicture(picture);
      }
    

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>My Profile</h1>
                <label htmlFor="username">Username:</label>
                <br/>
                <input type="text" value={name} onChange={(event: any) => setName(event.target.value)}/>
                <br/>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" value={email} onChange={(event: any) => setEmail(event.target.value)}/>
                <br/>
                <label htmlFor="description">Description:</label>
                <br/>
                <input type="text" value = {description} onChange={(event: any) => setDescription(event.target.value)}/>
                <br/>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" value = {picture} onChange={(event: any) => setPicture(event.target.value)}/>
                <br/>

                <button onClick={submitHandler}>Submit</button>
            </form>
        </>    
    )
}

export default MyProfile