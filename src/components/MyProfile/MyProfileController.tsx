import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import {UserContext} from '../Context/UserContext';
import MyProfileView from './MyProfileView'; 
import { ProfileInputType } from './MyProfileView';


function MyProfileController(props: any) {

    async function updateUser(userInput: ProfileInputType){;
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMmQxMzk1ZDktMGQ5MC00YzBjLTljZjEtZDQyYmNmYjJiNzgwIiwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTcyODkyMTAwNiwiZXhwIjoxNzI5NTI1ODA2fQ.bIYvY5YTdIk346ykMOinui6Uw0-jZhsQIn5RgJJUC9Y';    
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