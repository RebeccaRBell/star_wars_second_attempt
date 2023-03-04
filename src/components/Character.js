import React from 'react'

export const Character = ({character}) => {
  return (
    <option id={character}>{character.name}</option>
  )
}
export default Character;