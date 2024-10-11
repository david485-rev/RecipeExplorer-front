import React, { useState } from 'react'
import RegisterInput from './RegisterInput'

export type ResponseBody = {
    status: number,
    message: string
}

function RegisterContainer() {

    const [responseData, setResponseData] = useState<ResponseBody>({status: 0, message: ''});

  return (
    <>
        <RegisterInput setResponseData={setResponseData}/>
        {
            //responseData.status == 201 ? <p>{responseData.message}</p> : <p>Error</p>
            <p>{responseData.message}</p>
        }
    </>
  )
}

export default RegisterContainer