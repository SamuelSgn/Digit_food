import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = { email, password };
        console.log(info.email, info.password);
        axios.post("http://localhost:5000/login", info)
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem("kitchen", response.data);
            }
        })
        .catch((error) => console.log(error));
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
           <label htmlFor="email">email: </label>
           <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
           <label htmlFor="password">password: </label>
           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
           <button type="button" onClick={(e)=>{ handleSubmit(e)}}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}