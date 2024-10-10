//import "./login.css";


function login() {

    async function submitHandler(event: any){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const data = {username: formData.get("usernameField"),
            password: formData.get("passwordField")
        }
        const result = await fetch("http://localhost:8888/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const objResult = result.json();
        console.log(objResult);
    }   

    return (
        <form className="loginForm" onSubmit={submitHandler}>
            <label htmlFor="usernameField" className="form-label">Username</label><br></br>
            <input type="text" name="usernameField" placeholder="enter username here" /><br></br>
            <label htmlFor="passwordField" className="form-label">Password</label><br></br>
            <input type="password" name="passwordField" placeholder="enter password here" /><br></br>
            <button type="submit" className="submit" >Submit</button>
        </form>
        )
}
export default login;