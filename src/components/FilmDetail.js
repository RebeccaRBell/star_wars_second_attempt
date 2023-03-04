import React from 'react'
import Character from './Character'
import Starship from './Starship'

export const FilmDetail = ({film, characters, starships, setSelectCharacter}) => {

        const ListOfCharacters = characters.map((character, index) => {
          return <Character character={character} index={index} key={index} />
        })

        const ListOfStarships = starships.map((ship, index) => {
          return <Starship ship={ship} index={index} key={index} /> 
        })

        const characterSelect = function(character){
                setSelectCharacter(character)
}

  return (
    <div className='film-detail'>
    <div className='detail-left'>
        <h1>{film.title}</h1>
        <p>Directed by {film.director}</p>
        <p>{film.opening_crawl}</p>
        </div>
        <div className='detail-right'>
        <select>
        <option onChange={characterSelect}>Character</option>
        {ListOfCharacters}
        </select>
        <select>
                <option>
                        Starships
                </option> 
                {ListOfStarships}
        </select>
        </div>
    </div>
  )
}
export default FilmDetail;