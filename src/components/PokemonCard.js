import React from 'react'
import Ability from './Ability'

function PokemonCard({pokemonData}) {
  console.log(pokemonData)
  let picture = pokemonData.sprites != undefined ? pokemonData.sprites.front_default : null
  let ablitie = pokemonData.abilities != undefined ? pokemonData.abilities : null




  return (
    <div className="PokemonCard">
      <div className="PokemonCardInner">

        <div className="PokemonCardImage">
          <img src={picture} alt="pokemon img" />
        </div>

        <div className="PokemonCardContent">
            <h2>{pokemonData.name}</h2>
            <Ability ability={ablitie} />
        </div>

      </div>
    </div>
  )
}

export default PokemonCard
