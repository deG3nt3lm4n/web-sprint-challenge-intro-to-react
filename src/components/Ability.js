import React from 'react'
import styled from 'styled-components'

function Ability({ability}) {
  let ab = []

  for(let key in ability){
    ab.push(ability[key].ability.name)
  }

  return (
    <StyledAbility>
      <h4>Abilities: </h4>
      <ul>
       {
        ab.map(name => {
          return <li key={Math.random() * 10000} >{name}</li>
        })
       }
      </ul>
    </StyledAbility>
  )
}

const StyledAbility = styled.div`
  width: 100%;

  & h4{
    text-align: left;
    padding-left: 2px;
    margin: 2px 0;
  }
  & ul{
    padding: 4px;
    margin: 0;
    list-style-type: none;
    width: 100%;
    text-align: left;
    & li{
      padding: 2px 0;
    }
  }
`

export default Ability
