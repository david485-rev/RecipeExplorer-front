import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterInput from './RegisterInput'
import './RegisterContainer.css'

export type ResponseBody = {
    status: number,
    message: string
}

function RegisterContainer() {

    const [responseData, setResponseData] = useState<ResponseBody>({status: 0, message: ''});

  return (
    <>
        <h1>Signup</h1>
        <RegisterInput setResponseData={setResponseData}/>
        <h4>Have an account already? <Link to="/login">Sign in</Link></h4>
        {
            //responseData.status == 201 ? <p>{responseData.message}</p> : <p>Error</p>
            //<h2 id="message">{responseData.message}</h2>
            responseData && <h2 id="message">{responseData.message}</h2>
        }
        
    </>
  )
}

export default RegisterContainer