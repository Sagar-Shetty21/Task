import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { Link } from 'react-router-dom';

const UsersData = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/users-data")
            .then(({ data }) => setUserData(data.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="users-data-page">
            <div className="users-data-title">Users Data</div>
            <div class="users-card-container">
                {
                userData.length > 0 ? 
                        userData.map((user,index) => (
                            <UserCard key={index} data={user} />
                        ))
                :
                        <div>No User Data Found!</div>    
                }
            </div>
            <div className="nav-btn">
                <Link to="/login" >Create User</Link>
            </div>
        </div>
    )
}

export default UsersData