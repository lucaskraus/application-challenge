import {Outlet, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Components.scss';

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

    //Build a card with data received from API. 
    return(
        <div className="userCard">
            <img src={userDetails.avatar_url} alt="User Icon"/>
            <h2>Name: {userDetails.name}</h2>
            <p>Username: {userDetails.login}</p>
            <p>Account created at: {new Date(userDetails.created_at).getFullYear()}-{new Date(userDetails.created_at).getMonth()+1}-{new Date(userDetails.created_at).getDate()}</p>
            <a href={userDetails.html_url}>{userDetails.html_url}</a>
        <Outlet />
        </div>
    );
}

export default User;