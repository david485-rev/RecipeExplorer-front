import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {UserContext} from '../Context/UserContext';
import MyProfileView from './MyProfileView'; 
import { ProfileInputType } from './MyProfileView';
import config from '../../config';
const URL = `${config.path}`;

function MyProfileController(props: any) { 

    const user = useContext(UserContext);

    async function updateUser(userInput: ProfileInputType){
        const token = user?.token;    
        const headers = {'Authorization': `Bearer ${token}`};
        try{
             axios.post(`${URL}/users/profile`, {
                
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