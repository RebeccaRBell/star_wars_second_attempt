import React from 'react'

const Starship = ({ship, index}) => {
  return (
   <option value={ship.url}>{ship.name}</option>
  )
}

export default Starship