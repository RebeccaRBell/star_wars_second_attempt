import React from 'react';

const CharacterDetail = ({character}) => {
  return (
    <div className='character-ship-container'>
    <div className='character-ship-details'>
        <h1>{character.name}</h1>
        <p>Height: {character.height}cm</p>
        <p>Sex: {character.gender}</p>
        <p>Eye Colour: {character.eye_color}</p>
        <p>Hair Colour: {character.hair_color}</p>
    </div>
    </div>
  )
}

export default CharacterDetail;