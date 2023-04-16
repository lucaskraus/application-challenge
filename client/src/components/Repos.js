import {Outlet, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Components.scss';

const Repos = () => {

    const [userRepos, setUserRepos] = useState([]);
    
    //State used to show properly users in each page.
    const [currentPage, setCurrentPage] = useState(1);
    //Max page items.
    const itemsPerPage = 5;

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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const firstItemIndex = (currentPage - 1) * itemsPerPage;

    return(
    <div>
        <h2>{username}'s repositories</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {userRepos.slice(firstItemIndex, firstItemIndex + itemsPerPage).map((repo, index) => (
                    <tr key={firstItemIndex + index}>
                    <td>{repo.name}</td>
                    <td>{repo.description}</td>
                    <td>{repo.language}</td>
                    <td>{repo.created_at.substring(0,10)}</td>
                    </tr>
                ))}
            </tbody>
            <div className="pagination">
                {Array.from({ length: Math.ceil(userRepos.length / itemsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                ))}
            </div>
        </table>
        <Outlet />
    </div>
    );
};

export default Repos;