import {Outlet, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Repos = () => {
    const [userRepos, setUserRepos] = useState([]);

    //Catch the typed username in URL.
    const { username } = useParams();
    
    useEffect(() => {
        async function getRepos() {
        try {
            const response = await axios.get(`http://localhost:3001/api/users/${username}/repos`);
            console.log(response);
            setUserRepos(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    getRepos();
  }, [username]);

    return(
        'Hello, World'
    );
};

export default Repos;