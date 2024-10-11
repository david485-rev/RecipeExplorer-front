import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'


function TempDisplay() {
    const user = useContext(UserContext);
    return (
        <>
            <>This is a line</>
            {user && <p>{user.token}</p>}
        </>
    )
}

export default TempDisplay;