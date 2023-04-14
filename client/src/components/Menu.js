import './Components.scss';
import Menu from './Menu.js';
const Header = () => {

    //Redirect functions to work with button clicks.
    function listRoute(){

    };

    function detailsRoute(){

    };

    function repositoriesRoute(){

    };

    return(
        <nav className="main-menu">
            <ul>
                <button type="button" className="btn" onClick={listRoute}>Users List</button>
                <button type="button" className="btn" onClick={detailsRoute}>Users Details</button>
                <button type="button" className="btn" onClick={repositoriesRoute}>Repositories</button>
            </ul>
        </nav>
    );  
}

export default Header;