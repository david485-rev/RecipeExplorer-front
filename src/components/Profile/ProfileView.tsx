import React, { useContext, useEffect, useState } from 'react'
import { User, UserContext } from '../Context/UserContext';


export type ProfileViewType = {
    username: string,
    password: string,
    picture: string,
    description: string
}

export default function ProfileView(props:any) {

    const user = useContext(UserContext);
    const profile:User = props.profile;
    
    const [editing, setEditing] = useState<boolean>(false);
    
    function changeEditing(event: any){
        setEditing(!editing);
    }

    function changeProfile(event: any){
        props.updateProfile()
    }

    if(profile?.uuid && editing){
        return <div>
            <h1><input></input>{profile.username}</h1>
            <button className="btn btn-primary mx-3" onClick={changeEditing}>Finish Editing</button>
            <img id="picture" src={(profile.picture || "No Picture Located")} alt={"profile image"}/>
            <h3>{profile.email}</h3>
            <p>{profile.description || "No Description added"}</p>
            <button className="btn btn-primary mx-3" onClick={changeProfile}>SAVE</button>
            </div >
    }
    else if(profile?.uuid){
        return <div>
            <h1>{profile.username}</h1>
            {(profile.uuid === user?.uuid) && <button className="btn btn-primary mx-3" onClick={changeEditing}>Edit Page</button>}
            <img id="picture" src={(profile.picture || "No Picture Located")} alt={"profile image"}/>
            <h3>{profile.email}</h3>
            <p>{profile.description || "No Description added"}</p>
            </div>
    }
    return <>No Profile Found</>
}
