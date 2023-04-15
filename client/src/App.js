import {Outlet} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Example of API usage and front-end application!</h1>
      <Outlet />
    </div>
  );
}

export default App;
