import React from 'react'

export const Character = ({character}) => {
  return (
    <option value={character.url}>{character.name}</option>
  )
}
export default Character;