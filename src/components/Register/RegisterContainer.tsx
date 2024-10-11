import React, { useState } from 'react'
import RegisterInput from './RegisterInput'

function RegisterContainer() {

    const [status, setStatus] = useState(0);

  return (
    <>
        <RegisterInput setStatus={setStatus}/>
        {
            status == 201 ? <p>Created</p> : <p>Error</p>
        }
    </>
  )
}

export default RegisterContainer