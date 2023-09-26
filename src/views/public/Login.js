import { useState } from "react";
import './Login.css';

function HeaderLogin() {
    return (
        <>
            <h2> User Login</h2>
            <div className="Title">
                <i className="fas fa-user"></i>
            </div>
        </>
    )
}

function Login() {

    const [username, userNameUpdate] = useState()
    const [password, passwordUpdate] = useState()

    const ProceedLogin = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="login">
                <div className="container-login">
                <HeaderLogin></HeaderLogin>
                    <div className="form-login">
                        <form action="">
                            <div className="form">
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form">
                                <label htmlFor="passw">Password:</label>
                                <input type="text" name="passw" id="passw" />
                            </div>
                            <div className="button-form">
                            <button className="login-button" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;