import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'


const App = () => {

  const [pokemonData, setPokemonData] = useState([])

  // Page of pokemon max 20?
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200')
      .then(res => setPokemonData(res.data.results))
      .catch(err => console.log(err))

      return(
        console.log('clean up')
      )
  },[])

  console.log(pokemonData)


  return (
    <div className="App">

    <header>
      <h1>Pokemon App</h1>
      <p>Find your stupid pokemon</p>
      <select>
        <option>Pokemon 1</option>
        <option>Pokemon 2</option>
        <option>Pokemon 3</option>
      </select>
    </header>

    <div className="PokemonCard">
      <div className="PokemonCardInner">

        <div className="PokemonCardImage">
          <img src="" alt="pokemon img" />
        </div>

        <div className="PokemonCardContent">
            <h2>Name</h2>
        </div>

      </div>
    </div>

    </div>
  );
}

export default App;
