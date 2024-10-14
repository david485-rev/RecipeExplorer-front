import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {UserContext} from '../Context/UserContext';
import MyProfileView from './MyProfileView'; 
import { ProfileInputType } from './MyProfileView';


function MyProfileController(props: any) { 

    const user = useContext(UserContext);

    async function updateUser(userInput: ProfileInputType){
        const token = user?.token;    
        const headers = {'Authorization': `Bearer ${token}`};
        try{
             axios.post('http://localhost:8888/users/profile', {
                
                username: userInput.username,
                email: userInput.email,
                description: userInput.description,
                picture: userInput.picture

            }, {headers}).then((responseBody) => {
            })
            
        }catch(error){
            console.error(error);
        }
    }
    
    
    return (
        <>
            <MyProfileView updateUser ={updateUser}/>
        </>    
    )
}

export default MyProfileController