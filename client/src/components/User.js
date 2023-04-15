import {Outlet, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [userDetails, setUserDetails] = useState([]);

    //Catch the typed username in URL.
    const { username } = useParams();
    
    useEffect(() => {
        async function getDetails() {
        try {
            const response = await axios.get(`http://localhost:3001/api/users/${username}/details`);
            console.log(response);
            setUserDetails(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    getDetails();
  }, [username]);

    //Build a modern card with received data from API. 
    return(
        <div className="userCard">
            <img src={userDetails.avatar_url} alt="User Icon"/>
            <p>Name: {userDetails.name}</p>
            <p>Username: {userDetails.login}</p>
            <p>Account created at: {userDetails.created_at}</p>
            <a href={userDetails.html_url}>{userDetails.html_url}</a>
        <Outlet />
        </div>
    );
}

export default User;