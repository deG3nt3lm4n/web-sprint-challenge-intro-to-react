import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/PokemonCard'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'


const App = () => {

  const initialPokemonName = 'pikachu'
  const initialPokemon = {
    image: '',
    name: '',

  }

  const [pokemonData, setPokemonData] = useState([])
  const [pokemonName, setPokemonName] = useState(initialPokemonName)
  const [newPokemon , setNewPokemon] = useState({})

  // Page of pokemon max 20?
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200')
      .then(res => setPokemonData(res.data.results))
      .catch(err => console.log(err))

      return(
        console.log('clean up')
      )
  },[])

  // Pokemon Search by name
  useEffect(() => {
    const fetchData = () => {
      axios.get(`${pokemonUrl}${pokemonName}`)
        .then(res => setNewPokemon(res.data))
        .catch(err => console.log(err))
    }
    fetchData()
  },[pokemonName])

  // Looking for new pokemon
  const getPokemonValue = (e) => {
    e.preventDefault()
    const {value} = e.target
    setPokemonName(value)
  }

  return (
    <div className="App">

    <header>
      <h1>Pokemon App</h1>
      <p>Find your stupid pokemon</p>
      <select onChange={getPokemonValue} >
        {
          pokemonData.map(pokemon => {
            return(
              <option key={pokemon.name} >{pokemon.name}</option>
            )
          })
        }
      </select>
    </header>

    <PokemonCard pokemonData={newPokemon} />

    </div>
  );
}

export default App;
