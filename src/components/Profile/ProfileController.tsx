import React, { useEffect, useState } from 'react';
import ProfileView from './ProfileView';
import { Params, useParams } from 'react-router-dom';
import axios from 'axios';
import path from 'path';
import { User } from '../Context/UserContext';

const config = require("../../config");
const URL = `${config.path}`;



export default function ProfileController(props: any) {

    const { id }:Params<string> = useParams()
    const [profile, setProfile] = useState<User>();

    useEffect(() => {
        async function getUser(id: string | undefined){
            if(id){
                try{
                    const userInfo = await axios.get(`${URL}/users/profile/${id}`);
                    if(userInfo.status >= 200 && userInfo.status < 300){
                        setProfile(userInfo.data);
                    }
                    else{
                        setProfile(undefined);
                    }
                } catch (err){
                    console.log(err);
                }
            }
        }

        getUser(id)
    }, [id])


    function updateProfile(){
        console.log("BUTTON PUSH YAY");
    }

    return (
        <ProfileView profile={profile} updateProfile={updateProfile}/>
    )
}