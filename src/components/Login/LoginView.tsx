import { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import './LoginView.css'
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

    function loginInputHelp(msg: string) {
        switch(msg) {
            case 'no account found':
                return <>
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label"></label>
                        <input type="text" name="username" placeholder='username' className="form-control is-invalid" id="inputUsername" value={userInput.username} onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label"></label>
                        <input type='password' className="form-control is-invalid" placeholder='password' onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })} />
                        <div id="serverUsernameFeedback" className="invalid-feedback">Invalid Credentials</div>
                    </div>
                </>
            default:
                return <>
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label"></label>
                        <input type='text' name="username" className="form-control" placeholder='username' onChange={(e: any) => setUserInput({ ...userInput, username: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label"></label>
                        <input type='password' className="form-control" placeholder='password' onChange={(e: any) => setUserInput({ ...userInput, password: e.target.value })} />
                    </div>
                </>
        }
    }

    return (
        <form id='loginForm' onSubmit={handleSubmit}>
            {
                loginInputHelp(props.responseMessage)
            }
            <div>
                <button type="submit" className="btn btn-primary mx-3">Submit</button>
                <button type="reset" className="btn btn-danger mx-3">Reset</button>
            </div>
        </form>
    )
}

export default LoginView