import './Components.scss';
import Menu from './Menu.js';
const Header = () => {
    //Boolean states to show components.
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showRepositories, setShowRepositories] = useState(false);

    //Handle click buttons to show the properly API content.
    const handleClickList = () => {
        setShowList(true);
    };

    const handleClickDetails = () => {
        setShowDetails(true);
    };

    const handleClickRepositories = () => {
        setShowRepositories(true);
    };

    return(
        <nav className="main-menu">
            <ul>
                <button type="button" className="btn" onClick={handleClickList}>Users List</button>
                <button type="button" className="btn" onClick={handleClickDetails}>Users Details</button>
                <button type="button" className="btn" onClick={handleClickRepositories}>Repositories</button>
            </ul>
        </nav>
    );  
}

export default Header;