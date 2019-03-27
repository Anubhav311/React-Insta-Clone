import React from 'react';

import './login.css';

const Login = (props) => {
    return <div className="login-container">
        <h1>Log In</h1>
        <form>
            <input className="login" placeholder="username" onChange={props.usernameValue}/>
            <input className="login" placeholder="password" onChange={props.passwordValue}/>
            <button onClick={props.checkLogin}></button>
        </form>
    </div>
}

export default Login;