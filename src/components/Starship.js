import React from 'react'

const Starship = ({ship, index}) => {
  return (
   <option id={index}>{ship.name}</option>
  )
}

export default Starship