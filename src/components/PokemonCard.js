import React from 'react'
import Ability from './Ability'
import styled from 'styled-components'

function PokemonCard({pokemonData}) {
  console.log(pokemonData)
  let picture = pokemonData.sprites !== undefined ? pokemonData.sprites.front_default : null
  let ablitie = pokemonData.abilities !== undefined ? pokemonData.abilities : null




  return (
    <StyledPokemonCard className="PokemonCard">
      <StyledPokemonCardInner className="PokemonCardInner">

        <StylePokemonCardImage className="PokemonCardImage">
          <img src={picture} alt="pokemon img" />
        </StylePokemonCardImage>

        <StylePokemonCardContent className="PokemonCardContent">
            <h2>{pokemonData.name}</h2>
            <Ability ability={ablitie} />
        </StylePokemonCardContent>

      </StyledPokemonCardInner>
    </StyledPokemonCard>
  )
}

const StyledPokemonCard = styled.div`
  background-color: black;
  padding: 10px;
  width: 200px;
  transition: all ease-in 500ms;

  &:hover{
    box-shadow: 0 0 30px 10px rgba(255,124,12,.5);
  }
`
const StyledPokemonCardInner = styled.div`
  background-color: gold;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StylePokemonCardImage = styled.div`
  width: 100%;
  hight: 250px;
  background-color: ${(pr) => pr.theme.primaryColor};

  & img{
    width: 100%;
    height: 100%
  }
`
const StylePokemonCardContent = styled.div`
  width: 100%;

  & h2{
    padding: 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
`

export default PokemonCard
