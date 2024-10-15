import { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
export type LoginViewType = {
    username: string,
    password: string
}


function LoginView(props: any) {

    const user = useContext(UserContext);

    const [userInput, setUserInput] = useState<LoginViewType>({ username: "", password: "" });

    function handleSubmit(event: any) {
        event.preventDefault();
        props.login(userInput);
    }

    function handleTestButton(event: any){
        event.preventDefault();
        console.log(user);
    }
    return (
        <form id='registerForm' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="htmlForm-label"></label>
                    <input type='text' placeholder='username' onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })} />
                    {/* <div id="usernameHelp" className="htmlForm-text">Username must be unique.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="htmlForm-label"></label>
                    <input type='password' placeholder='password' onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button type="reset" className="btn btn-danger mx-3">Reset</button>
                    {/*<button type="button" className="btn btn-danger mx-3" onClick={handleTestButton}>Test</button>*/}
                </div>
                
            </form>
    )
}

export default LoginView