import Menu from './components/Menu.js';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  return (
    <div className="App">
      <h1>Example of API usage and front-end application! Choose an option in the menu below.</h1>
      <Menu />
    </div>
  );
}

export default App;
