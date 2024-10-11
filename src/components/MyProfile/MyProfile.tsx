import React, { useEffect, useState } from 'react'
import axios from 'axios';

function MyProfile() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [description, setDescription] = useState("");
    let [picture, setPicture] = useState("");
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMmQxMzk1ZDktMGQ5MC00YzBjLTljZjEtZDQyYmNmYjJiNzgwIiwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTcyODY3MTk1NiwiZXhwIjoxNzI5Mjc2NzU2fQ.MAeJ34uTDdeQ--x3ruRKkjXGr1G57orn-u6jGrnKX00'    

    useEffect(() => {
        let uuid = '2d1395d9-0d90-4c0c-9cf1-d42bcfb2b780';
        axios.get(`http://localhost:8888/users/profile/${uuid}`).then((responseBody)=>{
        setName(responseBody.data.username);
        setEmail(responseBody.data.email);
        setDescription(responseBody.data.description);
        setPicture(responseBody.data.picture);
            })  
    }, [])
    

    function submitHandler(event: any) {
        event.preventDefault();
        setName(name);
        setEmail(email);
        setDescription(description);
        setPicture(picture);

        const headers = {'Authorization': `Bearer ${token}`};

        console.log(name, email, description, picture);
        axios.post('http://localhost:8888/users/profile', {
            username: name,
            email:email,
            description: description,
            picture: picture
            }, {headers}).then((responseBody) => {
            console.log(responseBody);
            })
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