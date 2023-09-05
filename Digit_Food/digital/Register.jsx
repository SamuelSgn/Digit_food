import React, { useState } from "react";
import axios from "axios";
export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name_of_the_restaurant, setName_of_the_restaurant] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [contacts, setContacts] = useState('');
    
    
    
    const handleSubmit = (e) => {
        
        const info = { name_of_the_restaurant, email, localisation, contacts, password };
        console.log(info.name, info.email, info.Localisation, info.contacts, info.password);
        axios.post("http://localhost:5000/register", info)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form">
                <label htmlFor="Restaurant Name">Name of the restaurant: </label>
                <input value={name_of_the_restaurant} onChange={(e) => setName_of_the_restaurant(e.target.value)} type="text" name="Restaurant Name" id="Restaurant Name" placeholder="Name of the restaurant"/>
                <label htmlFor="email">email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="localisation">Localisation: </label>
                <input value={localisation} onChange={(e) => setLocalisation(e.target.value)} type="text" placeholder="Localisation" id="localisation" name="localisation"/>
                <label htmlFor="contacts">Contacts: </label>
                <input value={contacts} onChange={(e) => setContacts(e.target.value)} type="tel" placeholder="contacts" id="contacts" name="contacts"/>
                <label htmlFor="password">Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                <button type="button" onClick={(e)=>{ handleSubmit(e)}} >Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}