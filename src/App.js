import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [responseData, setResponseData] = useState(null);
      useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {setResponseData(response.data.results);
            })
            .catch(error => {
              console.log(error);
            });
      }, []);

  return (
    <div className="App">
      <ul>
        {responseData &&
        responseData.map((pokemonObj, index) => (<li key = {index}>
          {pokemonObj.name}
        </li>))}
      </ul>
    </div>
  );
}

export default App;