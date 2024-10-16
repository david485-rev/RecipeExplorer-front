import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {UserContext} from '../Context/UserContext';
import "../../styles/MyProfile/MyProfileView.css";
import config from '../../config';
const URL = `${config.path}`;
export type ProfileInputType = {
    username: string,
    email: string,
    description: string,
    picture: string
}

function MyProfileView(props: any) {
    const user = useContext(UserContext);
    let [userInput, setUserInput] = useState<ProfileInputType>({username: "", email: "", description: "", picture: ""});
    let [message, setMessage] = useState("");

   
    function submitHandler(event: any) {
        event.preventDefault();
        try { 
            props.updateUser(userInput).then(setMessage("update sucessful"))
            setMessage("update Sucessful");
        } catch(error) {
            setMessage("update failed")
        }

    }

    useEffect(() => {
        try {
            const uuid = user?.uuid;
            axios.get(`${URL}/users/profile/${uuid}`).then((responseBody)=>{
            setUserInput(responseBody.data);
            })
        } catch(error) {
            console.error(error);
        }
    }, [])

    return (
        <>  
            <div className="container mt-5">
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-7">
                        <div className = "card p-3 py-4">
                            <form onSubmit={submitHandler}>
                                <h1>My Profile</h1>
                                <img src = {userInput.picture} alt = "my image" width="100" height="100" className="rounded-circle" /> 
                                <br/>
                                <br/>
                                <input type="string" value = {userInput.picture} onChange={(event: any) => setUserInput({...userInput, picture: event.target.value})}/>
                                <br/>
                                <label htmlFor="username">Username:</label>
                                <br/>
                                <input type="text" value={userInput.username} required onChange={(event: any) => setUserInput({...userInput, username: event.target.value})}/>
                                <br/>
                                <label htmlFor="email">Email:</label>
                                <br/>
                                <input type="text" value={userInput.email} required onChange={(event: any) => setUserInput({...userInput, email: event.target.value})}/>
                                <br/>
                                <label htmlFor="description">Description:</label>
                                <br/>
                                <textarea className='large-input' value = {userInput.description} onChange={(event: any) => setUserInput({...userInput, description: event.target.value})}/>
                                <br/>
                                <h6>{message}</h6>                            
                                <button className = 'button' onClick={submitHandler}>Submit</button>                                   
                            </form>
                        </div>
                    </div>  
                </div>  
            </div>
        </>    
    )
}
export default MyProfileView;