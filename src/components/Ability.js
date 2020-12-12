import React from 'react'

function Ability({ability}) {
  let ab = []

  for(let key in ability){
    ab.push(ability[key].ability.name)
  }

  return (
    <div>
      <h4>Abilities</h4>
      <ul>
       {
        ab.map(name => {
          return <li key={Math.random() * 10000} >{name}</li>
        })
       }
      </ul>
    </div>
  )
}

export default Ability
