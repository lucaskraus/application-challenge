import './Components.scss';
import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const List = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        async function getUsers() {
        try {
            const response = await axios.get('http://localhost:3001/users');
            console.log(response);
            setUsers(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    getUsers();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const firstItemIndex = (currentPage - 1) * itemsPerPage;

    return(
        //Catch the data from object sended by the server and show in a table.
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Icon</th>
                    <th>Profile URL</th>
                </tr>
            </thead>
            <tbody>
                {users.slice(firstItemIndex, firstItemIndex + itemsPerPage).map((user, index) =>(
                    <tr key={firstItemIndex + index}>
                        <td>{firstItemIndex + index + 1}</td>
                        <td>{user.login}</td>
                        <td><img width="40" height="40" src={user.avatar_url} alt={'User Icon'}/></td>
                        <td><a href={user.html_url}>{user.html_url}</a></td>
                    </tr>
                ))};  
            </tbody>
        <Outlet /> 
        <div className="pagination">
            {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, i) => (
                <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
            ))}
        </div>
        </table>
    );
};

export default List;