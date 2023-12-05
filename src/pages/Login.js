import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:1337/api/users-data", {
            data: {
                name,
                contact,
                email
            },
        })
        .then((response) => {
            alert("User Created Successfully!")
        })
        setName("");
        setEmail("");
        setContact("");
    }

    return (
        <div className="login-page">
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label>Contact Number</label>
                    <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
            <div className="nav-btn">
                <Link to="/users-data" >View Users</Link>
            </div>
        </div>
    )
}

export default Login