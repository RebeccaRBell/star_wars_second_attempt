import React from 'react'

const StarshipDetail = ({starship}) => {
  return (
        <div className='character-ship-container'>
    <div className='character-ship-details'>
    <h1>{starship.name}</h1>
    <p>Model: {starship.model}</p>
    <p>Manufacturer: {starship.manufacturer}</p>
    <p>Price (in credits): {starship.cost_in_credits}</p>
    <p>Passengers: {starship.passengers}</p>
    </div>
    </div>
  )
}

export default StarshipDetail